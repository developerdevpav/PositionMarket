import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {SelectedProductActions, SelectProductActionTypes} from '../actions/select-product.actions';


export interface ProductSelect {
  id: string;
  attractionId: string;
}

export interface State extends EntityState<ProductSelect> {
}

export const adapter: EntityAdapter<ProductSelect> = createEntityAdapter<ProductSelect>();

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
    case SelectProductActionTypes.SetProducts: {
      return adapter.addMany(action.payload, state);
    }
    case SelectProductActionTypes.DeleteProduct: {
      return adapter.removeOne(action.payload, state);
    }
    case SelectProductActionTypes.DeleteProducts: {
      return adapter.removeMany(action.payload, state);
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
