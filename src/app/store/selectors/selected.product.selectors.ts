import {createSelector} from '@ngrx/store';
import * as language from './language.selectors';
import {Language} from '../models/language.model';
import * as selectedProduct from '../reducers/selected-product.reducer';
import * as typeService from '../reducers/type-service.reducer';
import {SelectedProduct} from '../models/products';
import {TypeService} from '../models/type-service.model';
import {Dictionary} from '@ngrx/entity';
import {convertTypeServiceByLanguage} from './converter';

export const selectSelectedProducts = createSelector(
  language.selectCurrentLanguage,
  selectedProduct.selectAll,
  typeService.selectEntities,
  (lang: Language, array: SelectedProduct[], dictionaryTypeService: Dictionary<TypeService>) => {
    return array.map(value => {
      return {
        id: value.id,
        attraction: value.attraction,
        order: value.order,
        price: value.price,
        service: convertTypeServiceByLanguage(dictionaryTypeService[value.service], lang)
      };
    });
  }
);

export const selectSelectedProductById = createSelector(
  language.selectCurrentLanguage,
  selectedProduct.selectEntities,
  typeService.selectEntities,
  (lang: Language, array: Dictionary<SelectedProduct>, dictionaryTypeService: Dictionary<TypeService>, props: string) => {
    const value = array[props];
    return {
      id: value.id,
      attraction: value.attraction,
      order: value.order,
      price: value.price,
      service: convertTypeServiceByLanguage(dictionaryTypeService[value.service], lang)
    };
  }
);

export const getTotalPriceByAttractionId = createSelector(
  selectedProduct.selectAll,
  (array: SelectedProduct[], props: string) => {
    return array
      .filter(it => it.attraction === props)
      .reduce((sum, current) => sum + current.price, 0);
  }
);

export const getTotalPrice = createSelector(
  selectedProduct.selectAll,
  typeService.selectEntities,
  (array: SelectedProduct[]) => {
    return array.reduce((sum, current) => sum + current.price, 0);
  }
);

export const getShoppingCart = createSelector(
  selectedProduct.selectAll,
  typeService.selectEntities,
  (array: SelectedProduct[]) => {
    const map: Map<string, { total: number, products: SelectedProduct[] }> = new Map();

    array.forEach(it => {
      if (map.has(it.attraction)) {
        const value = map.get(it.attraction);
        value.products.push(it);
      } else {
        const newArray = [];
        newArray.push(it);
        map.set(it.attraction, {total: 0, products: newArray});
      }
    });

    map.forEach((value, key) => {
      value.total = value.products.reduce((sum, it) => sum += it.price, 0);
    });

    return map;
  }
);

