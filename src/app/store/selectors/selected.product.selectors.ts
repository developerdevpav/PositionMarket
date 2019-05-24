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
    console.log(array);
    console.log(props);
    console.log(array
      .filter(it => it.attraction === props)
      .reduce((sum, current) => sum + current.price, 0));
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
