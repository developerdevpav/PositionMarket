import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {PositionEntity} from '../entities/position.entity';
import {PositionActions, PositionActionTypes} from './position.actions';
import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';

export const featurePositionAdapter: EntityAdapter<PositionEntity> = createEntityAdapter<PositionEntity>();

export interface PositionFeatureStore extends EntityState<PositionEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialPositionState: PositionFeatureStore = featurePositionAdapter.getInitialState();

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
  createFeatureSelector<PositionFeatureStore>('positionFeature');

export const {
  selectAll,
  selectEntities,
  selectTotal
} = featurePositionAdapter.getSelectors(selectPositionFeatureState);
