import * as tag from '../reducers/tag.reducer';
import * as type from '../reducers/type.reducer';
import * as typeservices from '../reducers/type-service.reducer';
import {LanguageState} from '../reducers/language.reducer';
import {createSelector} from '@ngrx/store';
import {Tag} from '../models/tag.model';
import {Nsi} from '../models/abstract.model';
import {Language} from '../models/language.model';
import {TypeService} from '../models/type-service.model';

export interface AppState {
  language: LanguageState;
}

export const selectLanguage = (state: AppState) => state.language;

export const selectTagsByLanguage = createSelector(
  selectLanguage,
  tag.selectAll,
  (lang: LanguageState, array: Tag[]) => {
    return array.map(value => {
      return convertByLanguage(value, lang.language);
    });
  }
);

export const selectTypesByLanguage = createSelector(
  selectLanguage,
  type.selectAll,
  (lang: LanguageState, array: Tag[]) => {
    return array.map(value => {
      return convertByLanguage(value, lang.language);
    });
  }
);

export const selectTypeServicesByLanguage = createSelector(
  selectLanguage,
  typeservices.selectAll,
  (lang: LanguageState, array: TypeService[]) => {
    console.log(lang.language, array);
    return array.map(value => {
      return convertByLanguage(value, lang.language);
    });
  }
);

export function convertByLanguage<T extends Nsi>(object: T, language: Language) {
  let valueString = '';
  if (object.values) {
    valueString = object.values
      .find(value => value.language === language).value;
  } else {
    valueString = Language.EN === language ? 'undefined' : 'Неопределено';
  }
  return {uuid: object.id, value: valueString};
}
