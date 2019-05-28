import {Action} from '@ngrx/store';
import {SelectedProduct} from '../models/products';

export enum SelectProductActionTypes {
  SelectProducts = '[SelectProduct] Select Products',
  SelectProductById = '[SelectProduct] Select product by ID',
  SetProduct = '[SelectProduct] Set product',
  DeleteProduct = '[SelectProduct] Delete SelectProduct'
}

export class SelectProduct implements Action {
  readonly type = SelectProductActionTypes.SelectProducts;
}

export class SelectProductById implements Action {
  readonly type = SelectProductActionTypes.SelectProductById;
  constructor(public payload: string) {}
}

export class SetProduct implements Action {
  readonly type = SelectProductActionTypes.SetProduct;
  constructor(public payload: SelectedProduct) {}
}

export class DeleteProduct implements Action {
  readonly type = SelectProductActionTypes.DeleteProduct;
  constructor(public payload: string) {}
}

export type SelectedProductActions = SelectProduct | SelectProductById | SetProduct | DeleteProduct;
