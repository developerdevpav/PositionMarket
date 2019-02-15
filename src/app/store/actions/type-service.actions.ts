import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {APIAction} from './abstarct.actions';
import {TypeService} from '../models/type-service.model';
import {TypeActionTypes} from './type.actions';

export class ApiTypeServiceLoadAll implements Action {
  readonly type = APIAction.LOAD_ALL + '[TypeService]';
}

export class ApiTypeServiceLoadById implements Action {
  readonly type = APIAction.LOAD_BY_ID + '[TypeService]';

  constructor(public payload: string) {
  }
}

export class ApiTypeServiceCreate implements Action {
  readonly type = APIAction.CREATE + '[TypeService]';

  constructor(public payload: TypeService) {
  }
}

export class ApiTypeServiceUpdate implements Action {
  readonly type = APIAction.UPDATE + '[TypeService]';

  constructor(public payload: TypeService) {
  }
}

export class ApiTypeServiceDelete implements Action {
  readonly type = APIAction.DELETE + '[TypeService]';

  constructor(public payload: string[]) {
  }
}

export enum TypeServiceAction {
  LOAD_SUCCESS_TYPE_SERVICES = '[TYPE_SERVICE] LOAD TYPE_SERVICES',
  LOAD_SUCCESS_TYPE_SERVICE = '[TYPE_SERVICE] LOAD TYPE_SERVICE',
  ADD_SUCCESS_TYPE_SERVICE = '[TYPE_SERVICE] ADD TYPE_SERVICE',
  ADD_SUCCESS_TYPE_SERVICES = '[TYPE_SERVICE] ADD TYPE_SERVICES',
  UPDATE_SUCCESS_TYPE_SERVICE = '[TYPE_SERVICE] UPDATE TYPE_SERVICE',
  DELETE_SUCCESS_TYPE_SERVICE = '[TYPE_SERVICE] DELETE TYPE_SERVICE',
  DELETE_SUCCESS_TYPE_SERVICES = '[TYPE_SERVICE] DELETE TYPE_SERVICES',
}


export class LoadSuccessTypeServices implements Action {
  readonly type = TypeServiceAction.LOAD_SUCCESS_TYPE_SERVICES;

  constructor(public payload: { typeServices: TypeService[] }) {
  }
}

export class LoadTypeServiceById implements Action {
  readonly type = TypeServiceAction.LOAD_SUCCESS_TYPE_SERVICE;

  constructor(public payload: { typeServices: TypeService }) {
  }
}


export class AddTypeService implements Action {
  readonly type = TypeServiceAction.ADD_SUCCESS_TYPE_SERVICE;

  constructor(public payload: { typeService: TypeService }) {
  }
}

export class AddTypeServices implements Action {
  readonly type = TypeServiceAction.ADD_SUCCESS_TYPE_SERVICES;

  constructor(public payload: { typeServices: TypeService[] }) {
  }
}

export class UpdateTypeService implements Action {
  readonly type = TypeServiceAction.UPDATE_SUCCESS_TYPE_SERVICE;

  constructor(public payload: { typeService: Update<TypeService> }) {
  }
}

export class DeleteTypeService implements Action {
  readonly type = TypeServiceAction.DELETE_SUCCESS_TYPE_SERVICE;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTypeServices implements Action {
  readonly type = TypeServiceAction.DELETE_SUCCESS_TYPE_SERVICES;

  constructor(public payload: { ids: string[] }) {
  }
}


export type TypeServiceActions =
  LoadSuccessTypeServices |
  AddTypeService |
  AddTypeServices |
  UpdateTypeService |
  DeleteTypeService |
  DeleteTypeServices;
