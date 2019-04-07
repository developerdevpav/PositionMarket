import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {ImageActions, ImageActionTypes} from '../actions/image.action';
import {ImageModel} from '../models/image.model';

export interface State extends EntityState<ImageModel> {}

export const adapter: EntityAdapter<ImageModel> = createEntityAdapter<ImageModel>();

export const initialState: State = adapter.getInitialState({});

export function imageReducer(state = initialState, action: ImageActions): State {
  switch (action.type) {
    case ImageActionTypes.LOAD_SUCCESS_IMAGES: {
      console.log(action);
      return adapter.addMany(action.payload, state);
    }

    default: {
      return state;
    }
  }
}

export const getImageSelectorState = createFeatureSelector<State>('images');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getImageSelectorState);
