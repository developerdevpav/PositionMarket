import {IRootStore} from '../index';
import {createSelector} from '@ngrx/store';
import * as type from '../type/type.feature.store';
import {TypeEntity} from '../entities/type.entity';

export const getError = (state: IRootStore): boolean => state.typeState.error;

export const getIsLoading = (state: IRootStore): boolean => state.typeState.isLoading;

export const selectIsLoading = createSelector(getIsLoading, (loading: boolean) => loading);

export const selectTypes = createSelector(type.selectAll, (productTypes: TypeEntity[]) => productTypes);
