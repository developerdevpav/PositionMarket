import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { TypeEntity } from '../entities/type.entity';
import { TypeActions, TypeActionsEnum } from './type.actions';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IRootStore } from '../index';

export const adapter: EntityAdapter<TypeEntity> =
  createEntityAdapter<TypeEntity>();

export interface TypeFeatureState extends EntityState<TypeEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialProductTypeState: TypeFeatureState = adapter.getInitialState(
  {
    ids: [],
    isLoading: false,
    entities: {},
    error: null
  }
);

export function reducerType(state = initialProductTypeState, action: TypeActions): TypeFeatureState {
  switch (action.type) {
    case TypeActionsEnum.LOAD_TYPES: {
      return { ...state, isLoading: true, error: null };
    }

    case TypeActionsEnum.LOAD_TYPES_SUCCESS: {
      return adapter.addAll(action.payload.types, state);
    }

    case TypeActionsEnum.CREATE_TYPE_SUCCESS: {
      return adapter.addOne(action.payload.type, state);
    }

    case TypeActionsEnum.UPDATE_TYPE_SUCCESS: {
      const todoUpdate: Update<TypeEntity> = { id: action.payload.type.id, changes: action.payload.type };
      return adapter.updateOne(todoUpdate, state);
    }

    case TypeActionsEnum.DELETE_TYPE_SUCCESS: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TypeActionsEnum.DELETE_TYPES_SUCCESS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    default: {
      return state;
    }
  }
}

export const selector: MemoizedSelector<object, TypeFeatureState> = createSelector((state: IRootStore) => state.typeState, (state: TypeFeatureState) => state);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = adapter.getSelectors(selector);
