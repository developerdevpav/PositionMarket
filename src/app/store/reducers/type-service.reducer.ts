import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TypeService } from '../models/type-service.model';
import {TypeServiceAction, TypeServiceActions} from '../actions/type-service.actions';
import {createFeatureSelector} from '@ngrx/store';

export interface State extends EntityState<TypeService> {
  // additional entities state properties
}

export const adapter: EntityAdapter<TypeService> = createEntityAdapter<TypeService>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function typeServiceReducer(
  state = initialState,
  action: TypeServiceActions
): State {
  switch (action.type) {
    case TypeServiceAction.ADD_SUCCESS_TYPE_SERVICE: {
      return adapter.addOne(action.payload.typeService, state);
    }

    case TypeServiceAction.ADD_SUCCESS_TYPE_SERVICES: {
      return adapter.addMany(action.payload.typeServices, state);
    }

    case TypeServiceAction.UPDATE_SUCCESS_TYPE_SERVICE: {
      return adapter.updateOne(action.payload.typeService, state);
    }

    case TypeServiceAction.DELETE_SUCCESS_TYPE_SERVICE: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TypeServiceAction.DELETE_SUCCESS_TYPE_SERVICES: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TypeServiceAction.LOAD_SUCCESS_TYPE_SERVICES: {
      return adapter.addAll(action.payload.typeServices, state);
    }

    default: {
      return state;
    }
  }
}

export const getTypeServicesSelectorState = createFeatureSelector<State>('typeservises');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getTypeServicesSelectorState);
