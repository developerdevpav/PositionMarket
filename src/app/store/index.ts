import {
  ActionReducerMap
} from '@ngrx/store';

import * as type from './reducers/type.reducer';
import * as tag from './reducers/tag.reducer';
import * as language from './reducers/language.reducer';
import {typeServiceReducer} from './reducers/type-service.reducer';
import * as attraction from './reducers/attraction.reducer';

export const reducers: ActionReducerMap<any> = {
  types: type.typeReducer,
  tags: tag.tagReducer,
  typeservises: typeServiceReducer,
  language: language.languageReducer,
  attractions: attraction.attractionReducer
};
