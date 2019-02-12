import {Language} from '../models/language.model';
import {LanguageAction, LanguageActions} from '../actions/language.actions';

export interface LanguageState {
  language: Language;
}

export const initialState: LanguageState = {
  language: Language.EN
};

export function languageReducer(language: LanguageState = initialState,
                                actions: LanguageAction): LanguageState {
  switch (actions.type) {
    case LanguageActions.SET_LANGUAGE: {
      switch (actions.payload) {
        case 'ru': {
          return { language: Language.RU };
        }
        case 'en': {
          return { language: Language.EN };
        }
        default: {
          return { language: Language.EN };
        }
      }
    }
    default: {
      return language;
    }
  }
}
