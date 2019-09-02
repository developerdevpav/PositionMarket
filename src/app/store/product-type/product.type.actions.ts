import {Action} from '@ngrx/store';
import {ProductTypeEntity} from '../entities/product.type.entity';

export enum ProductTypeActions {
  LOAD_PRODUCT_TYPES = '[Product-Type] Load Types',
  LOAD_PRODUCT_TYPES_SUCCESS = '[Product-Type] Load Types SUCCESS',
  REQUEST_PRODUCT_TYPE_FAILURE = '[Product-Type] FAILURE',

  LOAD_PRODUCT_TYPE = '[Product-Type] Load Type',
  LOAD_PRODUCT_TYPE_SUCCESS = '[Product-Type] Load Type SUCCESS',

  CREATE_PRODUCT_TYPE = '[Product-Type] Add Type',
  CREATE_PRODUCT_TYPE_SUCCESS = '[Product-Type] Add Type SUCCESS',

  UPDATE_PRODUCT_TYPE = '[Product-Type] Update Type',
  UPDATE_PRODUCT_TYPE_SUCCESS = '[Product-Type] Update Type SUCCESS',

  DELETE_PRODUCT_TYPE = '[Product-Type] Delete Type',
  DELETE_PRODUCT_TYPE_SUCCESS = '[Product-Type] Delete Type SUCCESS',

  DELETE_PRODUCT_TYPES = '[Product-Type] Delete Types',
  DELETE_PRODUCT_TYPES_SUCCESS = '[Product-Type] Delete Types SUCCESS'
}

export class RequestTypeFailure implements Action {
  readonly type = ProductTypeActions.REQUEST_PRODUCT_TYPE_FAILURE;

  constructor(public error?: any) {}
}

export class LoadProductTypes implements Action {
  readonly type = ProductTypeActions.LOAD_PRODUCT_TYPES;
}

export class LoadProductTypesSuccess implements Action {
  readonly type = ProductTypeActions.LOAD_PRODUCT_TYPES_SUCCESS;

  constructor(public payload: { productTypes: ProductTypeEntity[] }) {}
}

export class LoadProductType implements Action {
  readonly type = ProductTypeActions.LOAD_PRODUCT_TYPE;

  constructor(private payload: { id: string }) {}
}

export class LoadProductTypeSuccess implements Action {
  readonly type = ProductTypeActions.LOAD_PRODUCT_TYPE_SUCCESS;

  constructor(public payload: { productType: ProductTypeEntity }) {}
}

export class CreateProductType implements Action {
  readonly type = ProductTypeActions.CREATE_PRODUCT_TYPE;

  constructor(public payload: { productType: ProductTypeEntity }) {
  }
}

export class CreateProductTypeSuccess implements Action {
  readonly type = ProductTypeActions.CREATE_PRODUCT_TYPE_SUCCESS;

  constructor(public payload: { productType: ProductTypeEntity }) {
  }
}

export class UpdateProductType implements Action {
  readonly type = ProductTypeActions.UPDATE_PRODUCT_TYPE;

  constructor(public payload: { productType: ProductTypeEntity }) {
  }
}

export class UpdateProductTypeSuccess implements Action {
  readonly type = ProductTypeActions.UPDATE_PRODUCT_TYPE_SUCCESS;

  constructor(public payload: { productType: ProductTypeEntity }) {
  }
}

export class DeleteProductType implements Action {
  readonly type = ProductTypeActions.DELETE_PRODUCT_TYPE;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteProductTypeSuccess implements Action {
  readonly type = ProductTypeActions.DELETE_PRODUCT_TYPE_SUCCESS;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteProductTypes implements Action {
  readonly type = ProductTypeActions.DELETE_PRODUCT_TYPES;

  constructor(public payload: { ids: string[] }) {
  }
}

export class DeleteProductTypesSuccess implements Action {
  readonly type = ProductTypeActions.DELETE_PRODUCT_TYPES_SUCCESS;

  constructor(public payload: { ids: string[] }) {
  }
}

export type ProductTypeActionsType =
  RequestTypeFailure
  | LoadProductTypes
  | LoadProductTypesSuccess
  | LoadProductType
  | LoadProductTypeSuccess
  | CreateProductType
  | CreateProductTypeSuccess
  | UpdateProductType
  | UpdateProductTypeSuccess
  | DeleteProductType
  | DeleteProductTypeSuccess
  | DeleteProductTypes
  | DeleteProductTypesSuccess;
