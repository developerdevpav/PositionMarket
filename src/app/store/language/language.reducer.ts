import {Language} from './language.model';
import {LanguageActions, LanguageActionTypes} from './language.actions';

export function reducerLanguage(state = Language.EN, action: LanguageActions): Language {
  switch (action.type) {
    case LanguageActionTypes.SET_LANGUAGE: {
      switch (action.language) {
        case 'ru': {
          return Language.EN;
        }
        case 'en': {
          return Language.RU;
        }
        default: {
          return Language.EN;
        }
      }
    }
    default: {
      return state;
    }
  }
}
