import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Type } from '../models/type.model';

export enum TypeActionTypes {
  LoadTypes = '[Type] Load Types',
  AddType = '[Type] Add Type',
  UpsertType = '[Type] Upsert Type',
  AddTypes = '[Type] Add Types',
  UpsertTypes = '[Type] Upsert Types',
  UpdateType = '[Type] Update Type',
  UpdateTypes = '[Type] Update Types',
  DeleteType = '[Type] Delete Type',
  DeleteTypes = '[Type] Delete Types',
  ClearTypes = '[Type] Clear Types',
  LoadTypesApi = '[Type] Load API Types'
}

export class LoadTypesApi implements Action {
  readonly type = TypeActionTypes.LoadTypesApi;
}

export class LoadTypes implements Action {
  readonly type = TypeActionTypes.LoadTypes;

  constructor(public payload: { types: Type[] }) {}
}

export class AddType implements Action {
  readonly type = TypeActionTypes.AddType;

  constructor(public payload: { type: Type }) {}
}

export class UpsertType implements Action {
  readonly type = TypeActionTypes.UpsertType;

  constructor(public payload: { type: Type }) {}
}

export class AddTypes implements Action {
  readonly type = TypeActionTypes.AddTypes;

  constructor(public payload: { types: Type[] }) {}
}

export class UpsertTypes implements Action {
  readonly type = TypeActionTypes.UpsertTypes;

  constructor(public payload: { types: Type[] }) {}
}

export class UpdateType implements Action {
  readonly type = TypeActionTypes.UpdateType;

  constructor(public payload: { type: Update<Type> }) {}
}

export class UpdateTypes implements Action {
  readonly type = TypeActionTypes.UpdateTypes;

  constructor(public payload: { types: Update<Type>[] }) {}
}

export class DeleteType implements Action {
  readonly type = TypeActionTypes.DeleteType;

  constructor(public payload: { id: string }) {}
}

export class DeleteTypes implements Action {
  readonly type = TypeActionTypes.DeleteTypes;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearTypes implements Action {
  readonly type = TypeActionTypes.ClearTypes;
}

export type TypeActions =
 LoadTypes
 | AddType
 | UpsertType
 | AddTypes
 | UpsertTypes
 | UpdateType
 | UpdateTypes
 | DeleteType
 | DeleteTypes
 | ClearTypes;
