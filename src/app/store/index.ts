import {
  ActionReducerMap
} from '@ngrx/store';

import * as type from './reducers/type.reducer';
import * as tag from './reducers/tag.reducer';

export const reducers: ActionReducerMap<any> = {
  types: type.typeReducer,
  tags: tag.tagReducer
};
