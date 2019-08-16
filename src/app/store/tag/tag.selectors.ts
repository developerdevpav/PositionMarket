import { createSelector } from '@ngrx/store';
import { selectAll, TagState, selectEntities } from './tag.reducer';
import { TagEntity } from '../entities/tag.entity';
import * as tagSelector from '../tag/tag.reducer';
import * as language from '../language/language.selector';
import { IRootStore } from '../index';
import { Dictionary } from '@ngrx/entity';
import { convertArrayNsi } from '../services/utils/converter';

export const selectTags = createSelector(selectAll, (tags: TagEntity[]) => tags);

export const selectIsLoading = createSelector((state: IRootStore) => state.tagState, (tagState: TagState) => tagState.isLoading);
export const selectError = createSelector((state: IRootStore) => state.tagState, (tagState: TagState) => tagState.error);

export const getById = createSelector(selectEntities, (dictionary: Dictionary<TagEntity>, props: { id: string }) => {
    return dictionary[props.id];
});

export const selectByLanguage = createSelector(tagSelector.selectAll, language.getCurrentLanguage, (entities: TagEntity[], language: any) => {
    console.log(language);

    return convertArrayNsi(entities, language);
});
