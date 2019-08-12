import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { PositionEntity } from '../entities/position.entity';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IRootStore } from '../index';
import { PositionActionEnum, ProductPositionActionsPosition } from './position.actions';

export const adapter: EntityAdapter<PositionEntity> = createEntityAdapter<PositionEntity>({
  selectId: position => position.id
});

export interface PositionFeatureStore extends EntityState<PositionEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialPositionState: PositionFeatureStore = adapter.getInitialState(
  {
    ids: [],
    entities: {},
    isLoading: false,
    error: null
  }
);

export function reducerPosition(state = initialPositionState, action: ProductPositionActionsPosition): PositionFeatureStore {
  switch (action.type) {
    case PositionActionEnum.LOAD_POSITIONS: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case PositionActionEnum.LOAD_POSITIONS_SUCCESS: {
      return adapter.addAll(action.payload.positions, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case PositionActionEnum.CREATE_POSITION_SUCCESS: {
      return adapter.addOne(action.payload.position, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case PositionActionEnum.UPDATE_POSITION_SUCCESS: {
      const updatePosition: Update<PositionEntity> = {
        id: action.payload.position.id,
        changes: action.payload.position
      }

      return adapter.updateOne(updatePosition, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case PositionActionEnum.DELETE_POSITION_SUCCESS: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case PositionActionEnum.DELETE_POSITIONS_SUCCESS: {
      return adapter.removeMany(action.payload.ids, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case PositionActionEnum.REQUEST_POSITION_FAILURE: {
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

export const selector: MemoizedSelector<object, PositionFeatureStore> =
  createSelector((state: IRootStore) => state.positionState,
    (positionState: PositionFeatureStore) => positionState);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = adapter.getSelectors(selector);
