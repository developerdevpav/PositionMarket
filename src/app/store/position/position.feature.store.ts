import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {PositionEntity} from '../entities/position.entity';
import {PositionActions, PositionActionTypes} from './position.actions';
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IRootStore} from '../index';

export const featurePositionAdapter: EntityAdapter<PositionEntity> = createEntityAdapter<PositionEntity>({
  selectId: position => position.id
});

export interface PositionFeatureStore extends EntityState<PositionEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialPositionState: PositionFeatureStore = featurePositionAdapter.getInitialState(
  {
    ids: [],
    entities: {},
    isLoading: false,
    error: null
  }
);

export function reducerPosition(state = initialPositionState, action: PositionActions): PositionFeatureStore {
  switch (action.type) {
    case PositionActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case PositionActionTypes.LOAD_SUCCESS: {
      return featurePositionAdapter.addAll(action.positions, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case PositionActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
}

export const selectPositionFeatureState: MemoizedSelector<object, PositionFeatureStore> =
  createSelector((state: IRootStore) => state.positionState,
    (positionState: PositionFeatureStore) => positionState);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = featurePositionAdapter.getSelectors(selectPositionFeatureState);
