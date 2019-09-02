import {createSelector} from '@ngrx/store';
import {selectAll, selectEntities, TagState} from './tag.reducer';
import {TagEntity} from '../entities/tag.entity';
import * as tagSelector from '../tag/tag.reducer';
import * as languageSelector from '../language/language.selector';
import {IRootStore} from '../index';
import {Dictionary} from '@ngrx/entity';
import {convertArrayNsi} from '../services/utils/converter';
import {Language} from '../language/language.model';

export const selectTags = createSelector(selectAll, (tags: TagEntity[]) => tags);

export const selectIsLoading = createSelector((state: IRootStore) => state.tagState, (tagState: TagState) => tagState.isLoading);
export const selectError = createSelector((state: IRootStore) => state.tagState, (tagState: TagState) => tagState.error);

export const getById = createSelector(selectEntities, (dictionary: Dictionary<TagEntity>, props: { id: string }) => {
    return dictionary[props.id];
});

export const selectTagsByLanguage = createSelector(tagSelector.selectAll, languageSelector.getCurrentLanguage,
  (entities: TagEntity[], language: Language) => {
   return convertArrayNsi(entities, language);
});
