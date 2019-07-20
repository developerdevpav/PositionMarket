import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {AttractionModel} from '../models/attraction-model';
import {createFeatureSelector} from '@ngrx/store';
import {AttractionActions, AttractionActionTypes} from '../actions/attraction.actions';

export interface State extends EntityState<AttractionModel> {
  // additional entities state properties
}

export const adapter: EntityAdapter<AttractionModel> = createEntityAdapter<AttractionModel>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function attractionReducer(
  state = initialState,
  action: AttractionActions
): State {
  switch (action.type) {
    case AttractionActionTypes.ADD_SUCCESS_ATTRACTION: {
      return adapter.addOne(action.payload.attraction, state);
    }

    case AttractionActionTypes.ADD_SUCCESS_ATTRACTIONS: {
      return adapter.addMany(action.payload.attractions, state);
    }

    case AttractionActionTypes.UPDATE_SUCCESS_ATTRACTION: {
      return adapter.updateOne(action.payload.attraction, state);
    }

    case AttractionActionTypes.DELETE_SUCCESS_ATTRACTION: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AttractionActionTypes.DELETE_SUCCESS_ATTRACTIONS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AttractionActionTypes.LOAD_SUCCESS_ATTRACTIONS: {
      return adapter.addAll(action.payload.attractions, state);
    }
    case AttractionActionTypes.LOAD_SUCCESS_ATTRACTION: {
      return adapter.addOne(action.payload.attraction, state);
    }

    default: {
      return state;
    }
  }
}

export const getAttractionsSelectorState = createFeatureSelector<State>('attractions');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getAttractionsSelectorState);
