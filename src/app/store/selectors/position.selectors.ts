import {createSelector} from '@ngrx/store';
import * as attraction from '../reducers/attraction.reducer';
import {AttractionModel} from '../models/attraction-model';
import {selectCurrentLanguage} from './language.selectors';
import * as converter from './converter';
import {Language} from '../models/language.model';
import * as  type from '../reducers/type.reducer';
import * as  tag from '../reducers/tag.reducer';
import * as  typeService from '../reducers/type-service.reducer';
import * as  selectedProduct from '../reducers/selected-product.reducer';
import {Tag} from '../models/tag.model';
import {Dictionary} from '@ngrx/entity';
import {Type} from '../models/type.model';
import {TypeService} from '../models/type-service.model';
import {SelectedProduct} from '../models/products';


export const selectPositionById = createSelector(
  attraction.selectEntities,
  (array, props) => {
    return array[props.id];
  }
);

export const selectPositionsByLanguage = createSelector(
  selectCurrentLanguage,
  attraction.selectAll,
  (language: Language, array: AttractionModel[]) => {
    return array.map(value => {
      return {
        id: value.id,
        title: converter.getStringFromArrayValuesByLanguage(value.title, language),
        description: converter.getStringFromArrayValuesByLanguage(value.description, language),
        tags: value.tags,
        types: value.types,
        products: value.products
      };
    });
  }
);

export const selectShortPositionsByLanguage = createSelector(
  selectCurrentLanguage,
  attraction.selectAll,
  (language: Language, array: AttractionModel[]) => {
    return array.map(value => {
      return {id: value.id, title: converter.getStringFromArrayValuesByLanguage(value.title, language)};
    });
  }
);

export const selectPositionByLanguageForCatalog = createSelector(
  selectCurrentLanguage,
  attraction.selectAll,
  tag.selectEntities,
  type.selectEntities,
  typeService.selectEntities,
  (language: Language,
   array: AttractionModel[],
   tagDictionary: Dictionary<Tag>,
   typeDictionary: Dictionary<Type>,
   typeServiceDictionary: Dictionary<TypeService>) => {
    return array.map(value => {
      const tagObjects = value.tags.map(it => converter.convertNsiByLanguage(tagDictionary[it], language));
      const typeObjects = value.types.map(it => converter.convertNsiByLanguage(typeDictionary[it], language));
      const imageValues = value.images
        .sort(it => it.mainImage ? -1 : 1)
        .map((it, ind) => {
          return {
            image: it.image,
            url: it.url,
            index: ++ind
          };
        });
      const productValues = value.products.map(it => {
        const serviceFound = converter.convertTypeServiceByLanguage(typeServiceDictionary[it.service], language);
        return {
          service: serviceFound,
          id: it.id,
          price: it.price,
          order: it.order
        };
      });
      return {
        id: value.id,
        title: converter.getStringFromArrayValuesByLanguage(value.title, language),
        description: converter.getStringFromArrayValuesByLanguage(value.description, language),
        tags: tagObjects,
        types: typeObjects,
        images: imageValues,
        image: imageValues[0],
        products: productValues
      };
    });
  }
);

export const selectProductFromAttraction = createSelector(
  selectCurrentLanguage,
  selectedProduct.selectEntities,
  attraction.selectEntities,
  typeService.selectEntities,
  (language: Language, selectedProductDictionary: Dictionary<SelectedProduct>,
   positionDictionary: Dictionary<AttractionModel>,
   typeServiceDictionary: Dictionary<TypeService>, props: { id: string, attraction: string }[]) => {
    return props.map(item => {
      const position = positionDictionary[item.attraction];
      const product = position.products
        .find(it => it.id === item.id);
      if (!product) {
        return null;
      }
      return {
        id: product.id,
        price: product.price,
        order: product.order,
        attraction: item.attraction,
        selected: selectedProductDictionary[product.id] !== undefined,
        service: converter.convertTypeServiceByLanguage(typeServiceDictionary[product.service], language)
      };
    });
  }
);

