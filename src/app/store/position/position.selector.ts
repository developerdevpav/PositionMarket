import {PositionFeatureStore, selectAll, selectPositionFeatureState} from './position.feature.store';
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {PositionEntity} from '../entities/position.entity';


export const getError = (state: PositionFeatureStore): any => state.error;

export const getIsLoading = (state: PositionFeatureStore): boolean => state.isLoading;


export const getPositionById = (id: string) =>
  createSelector(selectAll, (positions: PositionEntity[]) => {
      return positions ? positions.find(p => p.id === id) : null;
  });

export const selectPositionError: MemoizedSelector<object, string> = createSelector(
  selectPositionFeatureState,
  getError
);

export const selectPositionIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectPositionFeatureState,
  getIsLoading
);
