import {createSelector} from '@ngrx/store';
import * as selectedProduct from '../reducers/selected-product.reducer';

export const getCountProductSelected = createSelector(
  selectedProduct.selectIds,
  (array: number[] | string[]) => {
    return array.length;
  }
);
