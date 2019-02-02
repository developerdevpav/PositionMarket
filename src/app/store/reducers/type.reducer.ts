import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Type} from '../models/type.model';
import {TypeActions, TypeActionTypes} from '../actions/type.actions';
import {createFeatureSelector} from '@ngrx/store';

export interface State extends EntityState<Type> {}

export const adapter: EntityAdapter<Type> = createEntityAdapter<Type>();

export const initialState: State = adapter.getInitialState({});

export function typeReducer(state = initialState, action: TypeActions): State {
  switch (action.type) {
    case TypeActionTypes.AddType: {
      return adapter.addOne(action.payload.type, state);
    }

    case TypeActionTypes.UpsertType: {
      return adapter.upsertOne(action.payload.type, state);
    }

    case TypeActionTypes.AddTypes: {
      return adapter.addMany(action.payload.types, state);
    }

    case TypeActionTypes.UpsertTypes: {
      return adapter.upsertMany(action.payload.types, state);
    }

    case TypeActionTypes.UpdateType: {
      return adapter.updateOne(action.payload.type, state);
    }

    case TypeActionTypes.UpdateTypes: {
      return adapter.updateMany(action.payload.types, state);
    }

    case TypeActionTypes.DeleteType: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TypeActionTypes.DeleteTypes: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TypeActionTypes.LoadTypes: {
      return adapter.addAll(action.payload.types, state);
    }

    case TypeActionTypes.ClearTypes: {
      return adapter.removeAll(state);
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
