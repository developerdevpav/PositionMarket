import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Type } from '../models/type.model';
import {APIAction} from './abstarct.actions';
import {TagActionTypes} from './tag.actions';

export class ApiTypeLoadAll implements Action {
  readonly type = APIAction.LOAD_ALL + '[Type]';
}

export class ApiTypeLoadById implements Action {
  readonly type = APIAction.LOAD_BY_ID + '[Type]';

  constructor(public payload: string) {
  }
}

export class ApiTypeCreate implements Action {
  readonly type = APIAction.CREATE + '[Type]';

  constructor(public payload: Type) {
  }
}

export class ApiTypeUpdate implements Action {
  readonly type = APIAction.UPDATE + '[Type]';

  constructor(public payload: Type) {
  }
}

export class ApiTypeDelete implements Action {
  readonly type = APIAction.DELETE + '[Type]';

  constructor(public payload: string[]) {
  }
}

export enum TypeActionTypes {
  LOAD_SUCCESS_TYPES = '[TYPE] LOAD TYPES',
  LOAD_SUCCESS_TYPE = '[TYPE] LOAD TYPE',
  ADD_SUCCESS_TYPE = '[TYPE] ADD TYPE',
  ADD_SUCCESS_TYPES = '[TYPE] ADD TYPES',
  UPDATE_SUCCESS_TYPE = '[TYPE] UPDATE TYPE',
  DELETE_SUCCESS_TYPE = '[TYPE] DELETE TYPE',
  DELETE_SUCCESS_TYPES = '[TYPE] DELETE TYPES',
}


export class LoadSuccessTypes implements Action {
  readonly type = TypeActionTypes.LOAD_SUCCESS_TYPES;

  constructor(public payload: { types: Type[] }) {
  }
}

export class AddType implements Action {
  readonly type = TypeActionTypes.ADD_SUCCESS_TYPE;

  constructor(public payload: { type: Type }) {
  }
}

export class GetTypeById implements Action {
  readonly type = TypeActionTypes.LOAD_SUCCESS_TYPE;

  constructor(public payload: string) {
  }
}

export class AddTypes implements Action {
  readonly type = TypeActionTypes.ADD_SUCCESS_TYPES;

  constructor(public payload: { types: Type[] }) {
  }
}

export class UpdateType implements Action {
  readonly type = TypeActionTypes.UPDATE_SUCCESS_TYPE;

  constructor(public payload: { type: Update<Type> }) {
  }
}

export class DeleteType implements Action {
  readonly type = TypeActionTypes.DELETE_SUCCESS_TYPE;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTypes implements Action {
  readonly type = TypeActionTypes.DELETE_SUCCESS_TYPES;

  constructor(public payload: { ids: string[] }) {
  }
}


export type TypeActions =
  LoadSuccessTypes |
  AddType |
  AddTypes |
  UpdateType |
  DeleteType |
  DeleteTypes;
