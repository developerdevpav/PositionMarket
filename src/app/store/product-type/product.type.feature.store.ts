import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ProductTypeEntity} from '../entities/product.type.entity';
import {ProductTypeActions, ProductTypeActionTypes} from './product.type.actions';
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IRootStore} from '../index';

export const featureProductTypeEntityAdapter: EntityAdapter<ProductTypeEntity> =
  createEntityAdapter<ProductTypeEntity>();

export interface ProductTypeFeatureStore extends EntityState<ProductTypeEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialProductTypeState: ProductTypeFeatureStore = featureProductTypeEntityAdapter.getInitialState(
  {
    ids: [],
    isLoading: false,
    entities: {},
    error: null
  }
);

export function reducerProductType(state = initialProductTypeState, action: ProductTypeActions): ProductTypeFeatureStore {
  switch (action.type) {
    case ProductTypeActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ProductTypeActionTypes.LOAD_SUCCESS: {
      return featureProductTypeEntityAdapter.addAll(action.productTypes, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ProductTypeActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
}

export const selectProductTypeFeatureState: MemoizedSelector<object, ProductTypeFeatureStore> =
  createSelector(
    (state: IRootStore) => state.productTypeState,
    (state: ProductTypeFeatureStore) => state);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = featureProductTypeEntityAdapter.getSelectors(selectProductTypeFeatureState);
