import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {SelectedProduct} from '../models/products';
import {SelectedProductActions, SelectProductActionTypes} from '../actions/select-product.actions';


export interface State extends EntityState<SelectedProduct> {
}

export const adapter: EntityAdapter<SelectedProduct> = createEntityAdapter<SelectedProduct>();

export const initialState: State = adapter.getInitialState({
});

export function selectedProductReducer(
  state = initialState,
  action: SelectedProductActions
): State {
  switch (action.type) {
    case SelectProductActionTypes.SetProduct: {
      return adapter.addOne(action.payload, state);
    }
    case SelectProductActionTypes.DeleteProduct: {
      return adapter.removeOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}

export const getSelectedProductSelectorState = createFeatureSelector<State>('selectedProducts');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getSelectedProductSelectorState);
