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
import {Product, SelectedProduct} from '../models/products';
import {TypeServiceEnum} from '../models/type-service';
import {EntityTypeServiceEnumToProduct} from '../models/catalog-entities';
import {ImageUI, NsiUI, OptionsWrapper, ProductUI, TypeServiceUI} from '../../ui/models';
import {DevpavProductTypeServiceInputProps} from '../../components/users/catalog/devpav-product-type-service/devpav-product-type-service.component';


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

export const getProductItem = createSelector(
  selectCurrentLanguage,
  attraction.selectAll,
  typeService.selectEntities,
  (language: Language, array: AttractionModel[], typeServiceDictionary: Dictionary<TypeService>) => {

    return array.map(value => {
      console.log(value.products);
      const minPrice = value.products
        .filter(it => it.service !== undefined && typeServiceDictionary[it.service].type === TypeServiceEnum.RENT)
        .sort((a, b) => {
          return a.price > b.price ? 1 : -1;
        })[0];

      const imageValues = value.images
        .sort(it => it.mainImage ? -1 : 1)
        .map((it, ind) => {
          return {
            image: it.image,
            url: it.url,
            index: ++ind
          };
        });
      return {
        id: value.id,
        title: converter.getStringFromArrayValuesByLanguage(value.title, language),
        descriptionText: converter.getStringFromArrayValuesByLanguage(value.description, language),
        minPrice: minPrice ? minPrice.price : 0,
        photos: imageValues,
        services: undefined
      };
    });
  }
);


export const selectPositionByLanguageForCatalog = createSelector(
  selectCurrentLanguage,
  attraction.selectAll,
  tag.selectEntities,
  type.selectEntities,
  typeService.selectEntities,
  selectedProduct.selectEntities,
  (language: Language,
   array: AttractionModel[],
   tagDictionary: Dictionary<Tag>,
   typeDictionary: Dictionary<Type>,
   typeServiceDictionary: Dictionary<TypeService>,
   selectedProductDictionary: Dictionary<SelectedProduct>) => {
    return array.map(value => {
      const tagObjects: NsiUI[] = value.tags.map(it => converter.convertNsiByLanguage(tagDictionary[it], language));
      const typeObjects: NsiUI[] = value.types.map(it => converter.convertNsiByLanguage(typeDictionary[it], language));

      const imageValues = value.images
        .sort(it => it.mainImage ? -1 : 1)
        .map((it, ind) => new ImageUI(it.image, ++ind, it.url));

      const productValues = value.products.map(it => {
        const serviceFound: TypeServiceUI = converter.convertTypeServiceByLanguage(typeServiceDictionary[it.service], language);
        return new ProductUI(it.id, it.price, value.id, serviceFound, it.order);
      });

      const map: Map<TypeServiceEnum, ProductUI[]> = new Map();

      map.set(TypeServiceEnum.RENT, []);
      map.set(TypeServiceEnum.DELIVERY, []);
      map.set(TypeServiceEnum.PERSONAL, []);

      productValues
        .filter(it => it)
        .filter(it => it.service)
        .filter(it => it.service.type)
        .forEach(product => {
            if (!map.has(product.service.type)) {
              map.set(product.service.type, []);
            }
            map.get(product.service.type).push(product);
        });

      const wrapper: OptionsWrapper[] = [];

      map.forEach((val, key) => {
        if (val.length !== 0) {

          const servicesInput: DevpavProductTypeServiceInputProps[] = val.map(it => {
            const selectedProductValue = selectedProductDictionary[it.id];
            return {
              id: it.id,
              title: it.service.title,
              price: it.price,
              selected: selectedProductValue !== undefined
            };
          });

          const typeExpansion = servicesInput.find(it => it.selected);
          console.log(typeExpansion);

          const typeInput: DevpavProductTypeServiceInputProps = {
            id: undefined,
            price: undefined,
            title: key.toString(),
            selected: typeExpansion !== undefined
          };

          wrapper.push({
            type: typeInput,
            services: servicesInput
          });
        }
      });

      return {
        id: value.id,
        title: converter.getStringFromArrayValuesByLanguage(value.title, language),
        description: converter.getStringFromArrayValuesByLanguage(value.description, language),
        tags: tagObjects,
        types: typeObjects,
        images: imageValues,
        image: imageValues[0],
        products: productValues,
        options: wrapper
      };
    });
  }
);

export const selectPositionByLanguageForShoppingCard = createSelector(
  selectCurrentLanguage,
  attraction.selectAll,
  tag.selectEntities,
  type.selectEntities,
  typeService.selectEntities,
  selectedProduct.selectEntities,
  (language: Language,
   array: AttractionModel[],
   tagDictionary: Dictionary<Tag>,
   typeDictionary: Dictionary<Type>,
   typeServiceDictionary: Dictionary<TypeService>,
   selectedProductDictionary: Dictionary<SelectedProduct>) => {
    return array.map(value => {
      const tagObjects: NsiUI[] = value.tags.map(it => converter.convertNsiByLanguage(tagDictionary[it], language));
      const typeObjects: NsiUI[] = value.types.map(it => converter.convertNsiByLanguage(typeDictionary[it], language));

      const imageValues = value.images
        .sort(it => it.mainImage ? -1 : 1)
        .map((it, ind) => new ImageUI(it.image, ++ind, it.url));

      const productValues = value.products.map(it => {
        const serviceFound: TypeServiceUI = converter.convertTypeServiceByLanguage(typeServiceDictionary[it.service], language);
        return new ProductUI(it.id, it.price, value.id, serviceFound, it.order);
      });

      const map: Map<TypeServiceEnum, ProductUI[]> = new Map();

      map.set(TypeServiceEnum.RENT, []);
      map.set(TypeServiceEnum.DELIVERY, []);
      map.set(TypeServiceEnum.PERSONAL, []);

      productValues
        .filter(it => it)
        .filter(it => it.service)
        .filter(it => it.service.type)
        .forEach(product => {
          if (!map.has(product.service.type)) {
            map.set(product.service.type, []);
          }
          map.get(product.service.type).push(product);
        });

      const wrapper: OptionsWrapper[] = [];

      map.forEach((val, key) => {
        if (val.length !== 0) {

          const servicesInput: DevpavProductTypeServiceInputProps[] = val.map(it => {
            const selectedProductValue = selectedProductDictionary[it.id];
            return {
              id: it.id,
              title: it.service.title,
              price: it.price,
              selected: selectedProductValue !== undefined
            };
          });

          const typeExpansion = servicesInput.find(it => it.selected);
          console.log(typeExpansion);

          const typeInput: DevpavProductTypeServiceInputProps = {
            id: undefined,
            price: undefined,
            title: key.toString(),
            selected: typeExpansion !== undefined
          };

          wrapper.push({
            type: typeInput,
            services: servicesInput
          });
        }
      });

      return {
        id: value.id,
        title: converter.getStringFromArrayValuesByLanguage(value.title, language),
        description: converter.getStringFromArrayValuesByLanguage(value.description, language),
        tags: tagObjects,
        types: typeObjects,
        images: imageValues,
        image: imageValues[0],
        products: productValues,
        options: wrapper
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

export const selectProductsFromAttractionByType = createSelector(
  selectCurrentLanguage,
  selectedProduct.selectEntities,
  attraction.selectEntities,
  typeService.selectEntities,
  (language: Language, selectedProductDictionary: Dictionary<SelectedProduct>, positionDictionary: Dictionary<AttractionModel>,
   typeServiceDictionary: Dictionary<TypeService>, props) => {
    const position: AttractionModel = positionDictionary[props.id];

    if (!position) {
      return null;
    }
    const products = position.products;
    const map: Map<TypeServiceEnum, Product[]> = new Map();

    map.set(TypeServiceEnum.RENT, []);
    map.set(TypeServiceEnum.DELIVERY, []);
    map.set(TypeServiceEnum.PERSONAL, []);

    products
      .forEach(it => {
        const service = typeServiceDictionary[it.service];
        if (service) {
          if (!map.has(service.type)) {
            map.set(service.type, []);
          }
          map.get(service.type).push(it);
        }
      });

    const resultList: EntityTypeServiceEnumToProduct[] = [];
    map.forEach((value, key) => {
      if (value.length !== 0) {
        const obj = {
          type: key,
          values: value.map(it => {
            const service = converter.convertTypeServiceByLanguage(typeServiceDictionary[it.service], language);
            return new ProductUI(it.id, it.price, props.id,
              {
                title: service.title,
                description: service.description,
                id: it.service,
                type: undefined
              }, 0);
          })
        };
        resultList.push(obj);
      }
    });
    return resultList;
  });
