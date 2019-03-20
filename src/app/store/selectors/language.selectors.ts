import {LanguageState} from '../reducers/language.reducer';
import {createSelector} from '@ngrx/store';
import {Language} from '../models/language.model';

export const selectLanguage = (state: LanguageState) => state.language;

export const selectCurrentLanguage = createSelector(selectLanguage, (language: Language) => language);
