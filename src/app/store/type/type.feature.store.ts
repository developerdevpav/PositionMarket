import {createEntityAdapter, EntityAdapter, EntityState, Update} from '@ngrx/entity';
import {TypeEntity} from '../entities/type.entity';
import {TypeActions, TypeActionsEnum} from './type.actions';
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IRootStore} from '../index';
import IStoreEntity from '../IStoreEntity';
import {transformState} from '../transform';

export const adapter: EntityAdapter<TypeEntity> = createEntityAdapter<TypeEntity>();

export interface TypeFeatureState extends EntityState<TypeEntity>, IStoreEntity {}

export const initialProductTypeState: TypeFeatureState = adapter.getInitialState(
  {
    ids: [],
    entities: {}
  }
);

export function reducerType(state = initialProductTypeState, action: TypeActions): TypeFeatureState {
  switch (action.type) {
    case TypeActionsEnum.LOAD_TYPES:
      return transformState(state, 'isLoading', true);
    case TypeActionsEnum.LOAD_TYPES_SUCCESS:
      return transformState(adapter.addAll(action.payload.types, state), 'isLoading', false);

    case TypeActionsEnum.CREATE_TYPE:
      return transformState(state, 'isCreating', true);
    case TypeActionsEnum.CREATE_TYPE_SUCCESS:
      return transformState(adapter.addOne(action.payload.type, state), 'isCreating', false);

    case TypeActionsEnum.UPDATE_TYPE:
      return transformState(state, 'isUpdating', true);
    case TypeActionsEnum.UPDATE_TYPE_SUCCESS:
      const todoUpdate: Update<TypeEntity> = {id: action.payload.type.id, changes: action.payload.type};
      return transformState(adapter.updateOne(todoUpdate, state), 'isUpdating', false);

    case TypeActionsEnum.DELETE_TYPE:
      return transformState(state, 'isDeleting', true);
    case TypeActionsEnum.DELETE_TYPE_SUCCESS: {
      return transformState(adapter.removeOne(action.payload.id, state), 'isDeleting', false);
    }
    case TypeActionsEnum.DELETE_TYPES:
      return transformState(state, 'isDeleting', true);
    case TypeActionsEnum.DELETE_TYPES_SUCCESS: {
      return transformState(adapter.removeMany(action.payload.ids, state), 'isDeleting', false);
    }
    default: {
      return state;
    }
  }
}

export const selector: MemoizedSelector<object, TypeFeatureState> =
  createSelector((state: IRootStore) => state.typeState, (state: TypeFeatureState) => state);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = adapter.getSelectors(selector);
