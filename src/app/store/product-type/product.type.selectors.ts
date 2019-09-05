import {IRootStore} from '../index';
import {createSelector} from '@ngrx/store';
import * as productType from './product.type.feature.store';
import {ProductTypeEntity} from '../entities/product.type.entity';
import * as languageSelector from '../language/language.selector';
import {Language} from '../language/language.model';
import {convertArrayNsi} from '../services/utils/converter';
import {Dictionary} from '@ngrx/entity';

export const getError = (state: IRootStore): boolean => state.productTypeState.error;

export const getIsLoading = (state: IRootStore): boolean => state.productTypeState.isLoading;

export const selectIsLoading = createSelector(getIsLoading, (loading: boolean) => loading);

export const selectProductTypes = createSelector(productType.selectAll, (productTypes: ProductTypeEntity[]) => {
  return  productTypes;
});

export const getById = createSelector(productType.selectEntities, (dictionary: Dictionary<ProductTypeEntity>, props: { id: string }) => {
  return dictionary[props.id];
});

export const selectProductTypesByLanguage =
  createSelector(productType.selectAll, languageSelector.getCurrentLanguage,
    (productTypes: ProductTypeEntity[], language: Language) => convertArrayNsi(productTypes, language));
