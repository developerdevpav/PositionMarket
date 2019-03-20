import {createSelector, Selector, State} from '@ngrx/store';
import * as tag from '../reducers/tag.reducer';
import {LanguageState} from '../reducers/language.reducer';
import {Tag} from '../models/tag.model';
import * as language from './language.selectors';
import * as converter from './converter';
import {Dictionary} from '@ngrx/entity';
import {Language} from '../models/language.model';
import {selectCurrentLanguage} from './language.selectors';

export const selectTagsByLanguage = createSelector(
  selectCurrentLanguage,
  tag.selectAll,
  (lang: Language, array: Tag[]) => {
    return array.map(value => {
      return converter.convertNsiByLanguage(value, lang);
    });
  }
);

export const selectTagsByIds = createSelector(
  selectCurrentLanguage,
  tag.selectEntities,
  (lang: Language, array: Dictionary<Tag>, props: string[]) => {
    const tags = props.map(uuid => array[uuid]);
    return tags.map(value => {
      return converter.convertNsiByLanguage(value, lang);
    });
  }
);

export const selectTagsAreNonIds = createSelector(
  selectCurrentLanguage,
  tag.selectAll,
  (lang: Language, array: Tag[], props: string[]) => {
    const tags = array.filter(it => props.find(uuid => it.id !== uuid) );
    return tags.map(value => {
      return converter.convertNsiByLanguage(value, lang);
    });
  }
);

export const selectTagById = createSelector(
  tag.selectEntities,
  (array, props) => {
    return array[props.id];
  }
);

