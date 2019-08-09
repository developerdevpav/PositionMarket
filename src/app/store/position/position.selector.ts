import {selectAll} from './position.feature.store';
import {createSelector} from '@ngrx/store';
import {PositionEntity} from '../entities/position.entity';
import {IRootStore} from '../index';

export const getError = (state: IRootStore): boolean => state.positionState.error;

export const getIsLoading = (state: IRootStore): boolean => state.positionState.isLoading;

export const getPositionById = (id: string) => createSelector(selectAll, (positions: PositionEntity[]) =>
  positions ? positions.find(p => p.id === id) : null
);

export const selectIsLoading = createSelector(getIsLoading, (loading: boolean) => loading);

export const selectPositions = createSelector(selectAll, (positions: PositionEntity[]) => {
  return positions;
});
