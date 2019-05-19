import {createSelector} from '@ngrx/store';
import * as attraction from '../reducers/attraction.reducer';
import {AttractionModel} from '../models/attraction-model';
import {selectCurrentLanguage} from './language.selectors';
import * as converter from './converter';
import {Language} from '../models/language.model';
import * as  type from '../reducers/type.reducer';
import * as  tag from '../reducers/tag.reducer';
import * as  typeService from '../reducers/type-service.reducer';
import {Tag} from '../models/tag.model';
import {Dictionary} from '@ngrx/entity';
import {Type} from '../models/type.model';
import {TypeService} from '../models/type-service.model';


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
      const imageMain = value.images.find(it => it.mainImage);
      const productValues = value.products.map(it => {
        const serviceFound = converter.convertNsiByLanguage(typeServiceDictionary[it.service], language);
        return {
          service: serviceFound,
          id: it.id,
          price: it.price
        };
      });
      return {
        id: value.id,
        title: converter.getStringFromArrayValuesByLanguage(value.title, language),
        tags: tagObjects,
        types: typeObjects,
        image: imageMain,
        images: value.images.sort(it => it.mainImage ? -1 : 1),
        sizeImages: value.images.length,
        indexCurrentImage: 1,
        products: productValues
      };
    });
  }
);

