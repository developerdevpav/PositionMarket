import {createSelector} from '@ngrx/store';
import * as type from '../reducers/type.reducer';
import * as converter from './converter';
import {Dictionary} from '@ngrx/entity';
import {Type} from '../models/type.model';
import {Tag} from '../models/tag.model';
import {selectCurrentLanguage} from './language.selectors';
import {Language} from '../models/language.model';

export const selectTypeById = createSelector(
  type.selectEntities,
  (array, props) => {
    return array[props.id];
  }
);

export const selectTypesByIds = createSelector(
  selectCurrentLanguage,
  type.selectEntities,
  (lang: Language, array: Dictionary<Type>, props: string[]) => {
    return props
      .map(it => array[it])
      .map(it => {
        return converter.convertNsiByLanguage(it, lang);
      });
  }
);

export const selectTypesAreNonIds = createSelector(
  selectCurrentLanguage,
  type.selectAll,
  (lang: Language, array: Type[], props: string[]) => {
    const tags = array.filter(it => props.find(uuid => it.id !== uuid) );
    return tags.map(value => {
      return converter.convertNsiByLanguage(value, lang);
    });
  }
);

export const selectTypesByLanguage = createSelector(
  selectCurrentLanguage,
  type.selectAll,
  (lang: Language, array: Tag[]) => {
    return array.map(value => {
      return converter.convertNsiByLanguage(value, lang);
    });
  }
);
