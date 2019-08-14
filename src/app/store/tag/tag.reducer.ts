import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { TagActions, TagActionTypes } from './tag.actions';
import { TagEntity } from '../entities/tag.entity';
import { createSelector } from '@ngrx/store';
import { IRootStore } from '../index';


export interface TagState extends EntityState<TagEntity> {
  isLoading?: boolean;
  error?: string;
}

const transformState = (state: TagState, loading: boolean = false, error: any = null) => ({ ...state, isLoading: loading, error: null })

export const adapter: EntityAdapter<TagEntity> = createEntityAdapter<TagEntity>();

export const initialState: TagState = adapter.getInitialState(
  {
    ids: [],
    isLoading: false,
    entities: {},
    error: null
  }
);

export function tagReducer(state = initialState, action: TagActions): TagState {
  switch (action.type) {
    case TagActionTypes.LOAD_TAGS: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }

    case TagActionTypes.LOAD_TAGS_SUCCESS: {
      return adapter.addAll(action.payload.tags, state);
    }

    case TagActionTypes.GET_TAG_BY_ID: {
      return transformState(state, true);
    }

    case TagActionTypes.GET_TAG_BY_ID_SUCCESS: {
      return adapter.addOne(action.payload.tag, transformState(state, false));
    }

    case TagActionTypes.CREATE_TAG_SUCCESS: {
      return adapter.addOne(action.payload.tag, state);
    }

    case TagActionTypes.UPDATE_TAG_SUCCESS: {
      const todoUpdate: Update<TagEntity> = { id: action.payload.tag.id, changes: action.payload.tag };
      return adapter.updateOne(todoUpdate, state);
    }

    case TagActionTypes.DELETE_TAG_SUCCESS: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TagActionTypes.DELETE_TAGS_SUCCESS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TagActionTypes.REQUEST_TAG_FAILURE: {
      return transformState(state, false, action.error);
    }

    default: {
      return state;
    }
  }
}


const selector = createSelector((state: IRootStore) => state.tagState, (tagState: TagState) => tagState);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(selector);