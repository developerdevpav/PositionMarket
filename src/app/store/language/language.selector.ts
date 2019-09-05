import {Language} from './language.model';
import {createSelector} from '@ngrx/store';
import {IRootStore} from '../index';

const languageState = (state: IRootStore) => state.languageState;

export const getCurrentLanguage = createSelector(languageState, (language: Language) => language);
