import {createEntityAdapter, EntityAdapter, EntityState, Update} from '@ngrx/entity';
import {TagActions, TagActionTypes} from './tag.actions';
import {TagEntity} from '../entities/tag.entity';
import {createSelector} from '@ngrx/store';
import {IRootStore} from '../index';
import IStoreEntity from '../IStoreEntity';
import {generateError, transformState} from '../transform';

export interface TagState extends EntityState<TagEntity>, IStoreEntity {}


export const adapter: EntityAdapter<TagEntity> = createEntityAdapter<TagEntity>();

export const initialState: TagState = adapter.getInitialState(
  {
    ids: [],
    entities: {},
    error: null
  }
);

export function tagReducer(state = initialState, action: TagActions): TagState {
  switch (action.type) {
    case TagActionTypes.CREATE_TAG:
      return transformState(state, 'isCreating', true);
    case TagActionTypes.UPDATE_TAG:
      return transformState(state, 'isUpdating', true);
    case TagActionTypes.DELETE_TAG:
      return transformState(state, 'isDeleting', true);
    case TagActionTypes.DELETE_TAGS:
      return transformState(state, 'isDeleting', true);
    case TagActionTypes.LOAD_TAGS:
      return transformState(state, 'isLoading', true);
    case TagActionTypes.GET_TAG_BY_ID:
      return transformState(state, 'isLoading', true);

    case TagActionTypes.LOAD_TAGS_SUCCESS:
      return transformState(adapter.addAll(action.payload.tags, state), 'isLoading', false);
    case TagActionTypes.GET_TAG_BY_ID_SUCCESS:
      return transformState(adapter.addOne(action.payload.tag, state), 'isLoading', false);

    case TagActionTypes.CREATE_TAG_SUCCESS:
      return transformState(adapter.addOne(action.payload.tag, state), 'isCreating', false);
    case TagActionTypes.UPDATE_TAG_SUCCESS:
      const todoUpdate: Update<TagEntity> = {id: action.payload.tag.id, changes: action.payload.tag};
      return transformState(adapter.updateOne(todoUpdate, state), 'isUpdating', false);
    case TagActionTypes.DELETE_TAG_SUCCESS:
      return transformState(adapter.removeOne(action.payload.id, state), 'isDeleting', false);
    case TagActionTypes.DELETE_TAGS_SUCCESS:
      return transformState(adapter.removeMany(action.payload.ids, state), 'isDeleting', false);
    case TagActionTypes.REQUEST_TAG_FAILURE:
      return generateError(state, action.error);
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
