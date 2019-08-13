import { createSelector } from '@ngrx/store';
import { selectAll, TagState, selectEntities } from './tag.reducer';
import { TagEntity } from '../entities/tag.entity';
import { IRootStore } from '../index';
import { Dictionary } from '@ngrx/entity';

export const selectTags = createSelector(selectAll, (tags: TagEntity[]) => tags);

export const selectIsLoading = createSelector((state: IRootStore) => state.tagState, (tagState: TagState) => tagState.isLoading);
export const selectError = createSelector((state: IRootStore) => state.tagState, (tagState: TagState) => tagState.error);

export const getById = createSelector(selectEntities, (dictionary: Dictionary<TagEntity>, props: { id: string }) => {
    return dictionary[props.id];
});
