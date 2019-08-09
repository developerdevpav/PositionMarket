import {Action} from '@ngrx/store';
import {ProductTypeEntity} from '../entities/product.type.entity';

export enum ProductTypeActionTypes {
  LOAD_REQUEST = '[Product-Type] Load Request',
  LOAD_FAILURE = '[Product-Type] Load Failure',
  LOAD_SUCCESS = '[Product-Type] Load Success'
}

export class LoadRequestProductType implements Action {
  readonly type = ProductTypeActionTypes.LOAD_REQUEST;
}

export class LoadSuccessProductType implements Action {
  readonly type = ProductTypeActionTypes.LOAD_SUCCESS;
  constructor(public productTypes: ProductTypeEntity[]) {}
}

export class LoadFailureProductType implements Action {
  readonly type = ProductTypeActionTypes.LOAD_FAILURE;
  constructor(public error: string) {}
}

export type ProductTypeActions = LoadRequestProductType | LoadSuccessProductType | LoadFailureProductType;
