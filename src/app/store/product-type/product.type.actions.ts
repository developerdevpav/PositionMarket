import {Action} from '@ngrx/store';
import {ProductTypeEntity} from '../entities/product.type.entity';

export enum ProductTypeActions {
  LOAD_PRODUCT_TYPES = '[Type] Load Types',
  LOAD_PRODUCT_TYPES_SUCCESS = '[Type] Load Types SUCCESS',
  REQUEST_PRODUCT_TYPE_FAILURE = '[Type] FAILURE',

  CREATE_PRODUCT_TYPE = '[Type] Add Type',
  CREATE_PRODUCT_TYPE_SUCCESS = '[Type] Add Type SUCCESS',

  UPDATE_PRODUCT_TYPE = '[Type] Update Type',
  UPDATE_PRODUCT_TYPE_SUCCESS = '[Type] Update Type SUCCESS',

  DELETE_PRODUCT_TYPE = '[Type] Delete Type',
  DELETE_PRODUCT_TYPE_SUCCESS = '[Type] Delete Type SUCCESS',

  DELETE_PRODUCT_TYPES = '[Type] Delete Types',
  DELETE_PRODUCT_TYPES_SUCCESS = '[Type] Delete Types SUCCESS'
}

export class RequestTypeFailure implements Action {
  readonly type = ProductTypeActions.REQUEST_PRODUCT_TYPE_FAILURE;

  constructor(public error?: string) {
  }
}

export class LoadProductTypes implements Action {
  readonly type = ProductTypeActions.LOAD_PRODUCT_TYPES;
}

export class LoadProductTypesSuccess implements Action {
  readonly type = ProductTypeActions.LOAD_PRODUCT_TYPES_SUCCESS;

  constructor(public payload: { productTypes: ProductTypeEntity[] }) {}
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
  | CreateProductType
  | CreateProductTypeSuccess
  | UpdateProductType
  | UpdateProductTypeSuccess
  | DeleteProductType
  | DeleteProductTypeSuccess
  | DeleteProductTypes
  | DeleteProductTypesSuccess
