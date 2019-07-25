import {Action} from '@ngrx/store';
import {ProductSelect} from '../reducers/selected-product.reducer';

export enum SelectProductActionTypes {
  SelectProducts = '[SelectProduct] Select Products',
  SelectProductById = '[SelectProduct] Select product by ID',
  SetProduct = '[SelectProduct] Set product',
  SetProducts = '[SelectProduct] Set products',
  DeleteProduct = '[SelectProduct] Delete SelectProduct'
}

export class SelectProducts implements Action {
  readonly type = SelectProductActionTypes.SelectProducts;
}

export class SelectProductById implements Action {
  readonly type = SelectProductActionTypes.SelectProductById;
  constructor(public payload: string) {}
}

export class SetProduct implements Action {
  readonly type = SelectProductActionTypes.SetProduct;
  constructor(public payload: ProductSelect) {}
}

export class SetProducts implements Action {
  readonly type = SelectProductActionTypes.SetProducts;
  constructor(public payload: ProductSelect[]) {}
}

export class DeleteProduct implements Action {
  readonly type = SelectProductActionTypes.DeleteProduct;
  constructor(public payload: string) {}
}

export type SelectedProductActions = SetProducts | SelectProductById | SetProduct | SetProducts | DeleteProduct;
