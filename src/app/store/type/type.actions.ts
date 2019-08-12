import { Action } from '@ngrx/store';
import { TypeEntity } from '../entities/type.entity';

export enum TypeActionsEnum {
  LOAD_TYPES = '[TYPE] Load TYPEs',
  LOAD_TYPES_SUCCESS = '[TYPE] Load TYPEs SUCCESS',
  REQUEST_TYPE_FAILURE = '[TYPE] FAILURE',

  CREATE_TYPE = '[TYPE] Add TYPE',
  CREATE_TYPE_SUCCESS = '[TYPE] Add TYPE SUCCESS',

  UPDATE_TYPE = '[TYPE] Update TYPE',
  UPDATE_TYPE_SUCCESS = '[TYPE] Update TYPE SUCCESS',

  DELETE_TYPE = '[TYPE] Delete TYPE',
  DELETE_TYPE_SUCCESS = '[TYPE] Delete TYPE SUCCESS',

  DELETE_TYPES = '[TYPE] Delete TYPEs',
  DELETE_TYPES_SUCCESS = '[TYPE] Delete TYPEs SUCCESS'
}

export class RequestTypeFailure implements Action {
  readonly type = TypeActionsEnum.REQUEST_TYPE_FAILURE;

  constructor(public error?: string) {
  }
}


export class LoadTypes implements Action {
  readonly type = TypeActionsEnum.LOAD_TYPES;
}

export class LoadTypesSuccess implements Action {
  readonly type = TypeActionsEnum.LOAD_TYPES_SUCCESS;

  constructor(public payload: { types: TypeEntity[] }) {
  }
}

export class CreateType implements Action {
  readonly type = TypeActionsEnum.CREATE_TYPE;

  constructor(public payload: { type: TypeEntity }) {
  }
}

export class CreateTypeSuccess implements Action {
  readonly type = TypeActionsEnum.CREATE_TYPE_SUCCESS;

  constructor(public payload: { type: TypeEntity }) {
  }
}

export class UpdateType implements Action {
  readonly type = TypeActionsEnum.UPDATE_TYPE;

  constructor(public payload: { type: TypeEntity }) {
  }
}

export class UpdateTypeSuccess implements Action {
  readonly type = TypeActionsEnum.UPDATE_TYPE_SUCCESS;

  constructor(public payload: { type: TypeEntity }) {
  }
}

export class DeleteType implements Action {
  readonly type = TypeActionsEnum.DELETE_TYPE;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTypeSuccess implements Action {
  readonly type = TypeActionsEnum.DELETE_TYPE_SUCCESS;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTypes implements Action {
  readonly type = TypeActionsEnum.DELETE_TYPES;

  constructor(public payload: { ids: string[] }) {
  }
}

export class DeleteTypesSuccess implements Action {
  readonly type = TypeActionsEnum.DELETE_TYPES_SUCCESS;

  constructor(public payload: { ids: string[] } ) {}
}


export type TypeActions =
  RequestTypeFailure
  | LoadTypes
  | LoadTypesSuccess
  | CreateType
  | CreateTypeSuccess
  | UpdateType
  | UpdateTypeSuccess
  | DeleteType
  | DeleteTypeSuccess
  | DeleteTypes
  | DeleteTypesSuccess;
