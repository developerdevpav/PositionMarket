import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { TypeService } from '../models/type-service.model';

export enum TypeServiceActionTypes {
  LoadTypeServices = '[TypeService] Load TypeServices',
  AddTypeService = '[TypeService] Add TypeService',
  UpsertTypeService = '[TypeService] Upsert TypeService',
  AddTypeServices = '[TypeService] Add TypeServices',
  UpsertTypeServices = '[TypeService] Upsert TypeServices',
  UpdateTypeService = '[TypeService] Update TypeService',
  UpdateTypeServices = '[TypeService] Update TypeServices',
  DeleteTypeService = '[TypeService] Delete TypeService',
  DeleteTypeServices = '[TypeService] Delete TypeServices',
  ClearTypeServices = '[TypeService] Clear TypeServices'
}

export class ApiLoadTypeServices implements Action {
  readonly type = '[TypeService] load all api';
}


export class LoadTypeServices implements Action {
  readonly type = TypeServiceActionTypes.LoadTypeServices;

  constructor(public payload: { typeServices: TypeService[] }) {}
}

export class AddTypeService implements Action {
  readonly type = TypeServiceActionTypes.AddTypeService;

  constructor(public payload: { typeService: TypeService }) {}
}

export class UpsertTypeService implements Action {
  readonly type = TypeServiceActionTypes.UpsertTypeService;

  constructor(public payload: { typeService: TypeService }) {}
}

export class AddTypeServices implements Action {
  readonly type = TypeServiceActionTypes.AddTypeServices;

  constructor(public payload: { typeServices: TypeService[] }) {}
}

export class UpsertTypeServices implements Action {
  readonly type = TypeServiceActionTypes.UpsertTypeServices;

  constructor(public payload: { typeServices: TypeService[] }) {}
}

export class UpdateTypeService implements Action {
  readonly type = TypeServiceActionTypes.UpdateTypeService;

  constructor(public payload: { typeService: Update<TypeService> }) {}
}

export class UpdateTypeServices implements Action {
  readonly type = TypeServiceActionTypes.UpdateTypeServices;

  constructor(public payload: { typeServices: Update<TypeService>[] }) {}
}

export class DeleteTypeService implements Action {
  readonly type = TypeServiceActionTypes.DeleteTypeService;

  constructor(public payload: { id: string }) {}
}

export class DeleteTypeServices implements Action {
  readonly type = TypeServiceActionTypes.DeleteTypeServices;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearTypeServices implements Action {
  readonly type = TypeServiceActionTypes.ClearTypeServices;
}

export type TypeServiceActions =
 LoadTypeServices
 | AddTypeService
 | UpsertTypeService
 | AddTypeServices
 | UpsertTypeServices
 | UpdateTypeService
 | UpdateTypeServices
 | DeleteTypeService
 | DeleteTypeServices
 | ClearTypeServices;
