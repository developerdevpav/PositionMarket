import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TypeService } from '../models/type-service.model';
import { TypeServiceActions, TypeServiceActionTypes } from '../actions/type-service.actions';
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
    case TypeServiceActionTypes.AddTypeService: {
      return adapter.addOne(action.payload.typeService, state);
    }

    case TypeServiceActionTypes.UpsertTypeService: {
      return adapter.upsertOne(action.payload.typeService, state);
    }

    case TypeServiceActionTypes.AddTypeServices: {
      return adapter.addMany(action.payload.typeServices, state);
    }

    case TypeServiceActionTypes.UpsertTypeServices: {
      return adapter.upsertMany(action.payload.typeServices, state);
    }

    case TypeServiceActionTypes.UpdateTypeService: {
      return adapter.updateOne(action.payload.typeService, state);
    }

    case TypeServiceActionTypes.UpdateTypeServices: {
      return adapter.updateMany(action.payload.typeServices, state);
    }

    case TypeServiceActionTypes.DeleteTypeService: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TypeServiceActionTypes.DeleteTypeServices: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TypeServiceActionTypes.LoadTypeServices: {
      return adapter.addAll(action.payload.typeServices, state);
    }

    case TypeServiceActionTypes.ClearTypeServices: {
      return adapter.removeAll(state);
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
