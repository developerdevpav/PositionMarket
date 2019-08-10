import {IRootStore} from '../index';
import {createSelector} from '@ngrx/store';
import * as productType from './product.type.feature.store';
import {ProductTypeEntity} from '../entities/product.type.entity';

export const getError = (state: IRootStore): boolean => state.productTypeState.error;

export const getIsLoading = (state: IRootStore): boolean => state.productTypeState.isLoading;

export const selectIsLoading = createSelector(getIsLoading, (loading: boolean) => loading);

export const selectProductTypes = createSelector(productType.selectAll, (productTypes: ProductTypeEntity[]) => {
  return  productTypes;
});
