import {Action} from '@ngrx/store';
import {TypeEntity} from '../entities/type.entity';

export enum TypeActionTypes {
  LOAD_REQUEST = '[Type] Load Request',
  LOAD_FAILURE = '[Type] Load Failure',
  LOAD_SUCCESS = '[Type] Load Success'
}

export class LoadRequestType implements Action {
  readonly type = TypeActionTypes.LOAD_REQUEST;
}

export class LoadSuccessType implements Action {
  readonly type = TypeActionTypes.LOAD_SUCCESS;
  constructor(public typeEntities: TypeEntity[]) {}
}

export class LoadFailureType implements Action {
  readonly type = TypeActionTypes.LOAD_FAILURE;
  constructor(public error: string) {}
}

export type TypeActions = LoadFailureType | LoadSuccessType | LoadRequestType;
