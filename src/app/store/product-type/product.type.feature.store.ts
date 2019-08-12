import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { ProductTypeEntity } from '../entities/product.type.entity';
import { ProductTypeActions, ProductTypeActionsType } from './product.type.actions';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IRootStore } from '../index';
import { TypeEntity } from '../entities/type.entity';

export const adapter: EntityAdapter<ProductTypeEntity> = createEntityAdapter<ProductTypeEntity>();

export interface ProductTypeFeatureStore extends EntityState<ProductTypeEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialProductTypeState: ProductTypeFeatureStore = adapter.getInitialState(
  {
    ids: [],
    isLoading: false,
    entities: {},
    error: null
  }
);

export function reducerProductType(state = initialProductTypeState, action: ProductTypeActionsType): ProductTypeFeatureStore {
  switch (action.type) {
    case ProductTypeActions.LOAD_PRODUCT_TYPES: {
      return { ...state, isLoading: true, error: null };
    }

    case ProductTypeActions.LOAD_PRODUCT_TYPES_SUCCESS: {
      return adapter.addAll(action.payload.productTypes, state);
    }

    case ProductTypeActions.CREATE_PRODUCT_TYPE_SUCCESS: {
      return adapter.addOne(action.payload.productType, state);
    }

    case ProductTypeActions.UPDATE_PRODUCT_TYPE_SUCCESS: {
      const typeWillUpdate: Update<TypeEntity> = {
        id: action.payload.productType.id, 
        changes: action.payload.productType 
      };
      return adapter.updateOne(typeWillUpdate, state);
    }

    case ProductTypeActions.DELETE_PRODUCT_TYPE_SUCCESS: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ProductTypeActions.DELETE_PRODUCT_TYPES_SUCCESS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    default: { return state; }
  }
}

export const selector: MemoizedSelector<object, ProductTypeFeatureStore> =
  createSelector((state: IRootStore) => state.productTypeState, (state: ProductTypeFeatureStore) => state);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = adapter.getSelectors(selector);
