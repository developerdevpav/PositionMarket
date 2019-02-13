import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Type} from '../models/type.model';
import {TypeActions, TypeActionTypes} from '../actions/type.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Tag} from '../models/tag.model';
import {Language} from '../models/language.model';

export interface State extends EntityState<Type> {}

export const adapter: EntityAdapter<Type> = createEntityAdapter<Type>();

export const initialState: State = adapter.getInitialState({});

export function typeReducer(state = initialState, action: TypeActions): State {
  switch (action.type) {
    case TypeActionTypes.ADD_SUCCESS_TYPE: {
      return adapter.addOne(action.payload.type, state);
    }

    case TypeActionTypes.ADD_SUCCESS_TYPES: {
      return adapter.addMany(action.payload.types, state);
    }

    case TypeActionTypes.UPDATE_SUCCESS_TYPE: {
      return adapter.updateOne(action.payload.type, state);
    }

    case TypeActionTypes.DELETE_SUCCESS_TYPE: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TypeActionTypes.DELETE_SUCCESS_TYPES: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TypeActionTypes.LOAD_SUCCESS_TYPES: {
      return adapter.addAll(action.payload.types, state);
    }

    default: {
      return state;
    }
  }
}

export const getTypeSelectorState = createFeatureSelector<State>('types');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getTypeSelectorState);
