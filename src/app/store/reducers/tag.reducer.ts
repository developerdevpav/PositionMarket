import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Tag } from '../models/tag.model';
import { TagActions, TagActionTypes } from '../actions/tag.actions';
import {createFeatureSelector} from '@ngrx/store';

export interface State extends EntityState<Tag> {
}

export const adapter: EntityAdapter<Tag> = createEntityAdapter<Tag>();

export const initialState: State = adapter.getInitialState({
});

export function tagReducer(
  state = initialState,
  action: TagActions
): State {
  switch (action.type) {
    case TagActionTypes.ADD_SUCCESS_TAG: {
      return adapter.addOne(action.payload.tag, state);
    }

    case TagActionTypes.ADD_SUCCESS_TAGS: {
      return adapter.addMany(action.payload.tags, state);
    }

    case TagActionTypes.UPDATE_SUCCESS_TAG: {
      return adapter.updateOne(action.payload.tag, state);
    }

    case TagActionTypes.DELETE_SUCCESS_TAG: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TagActionTypes.DELETE_SUCCESS_TAGS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TagActionTypes.LOAD_SUCCESS_TAGS: {
      return adapter.addAll(action.payload.tags, state);
    }

    default: {
      return state;
    }
  }
}

export const getTagSelectorState = createFeatureSelector<State>('tags');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getTagSelectorState);
