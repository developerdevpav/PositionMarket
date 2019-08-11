import {createSelector} from '@ngrx/store';
import {selectAll, TagState} from './tag.reducer';
import {TagEntity} from '../entities/tag.entity';
import {IRootStore} from '../index';

export const selectTags = createSelector(selectAll, (tags: TagEntity[]) => tags);

export const selectIsLoading = createSelector(
  (state: IRootStore) => state.tagState,
  (tagState: TagState) => tagState.isLoading);
