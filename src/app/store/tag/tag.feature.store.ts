import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {TagEntity} from '../entities/tag.entity';
import {TagActions, TagActionTypes} from './tag.actions';
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IRootStore} from '../index';

export const featureTagEntityAdapter: EntityAdapter<TagEntity> =
  createEntityAdapter<TagEntity>();

export interface TagFeatureState extends EntityState<TagEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialProductTypeState: TagFeatureState = featureTagEntityAdapter.getInitialState(
  {
    ids: [],
    isLoading: false,
    entities: {},
    error: null
  }
);

export function reducerTag(state = initialProductTypeState, action: TagActions): TagFeatureState {
  switch (action.type) {
    case TagActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case TagActionTypes.LOAD_SUCCESS: {
      return featureTagEntityAdapter.addAll(action.tagEntities, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case TagActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
}

export const selectTagFeatureState: MemoizedSelector<object, TagFeatureState> =
  createSelector((state: IRootStore) => state.tagState,
    (state: TagFeatureState) => state);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = featureTagEntityAdapter.getSelectors(selectTagFeatureState);
