import {createEntityAdapter, EntityAdapter, EntityState, Update} from '@ngrx/entity';
import {ProductTypeEntity} from '../entities/product.type.entity';
import {ProductTypeActions, ProductTypeActionsType} from './product.type.actions';
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IRootStore} from '../index';
import {TypeEntity} from '../entities/type.entity';
import IStoreEntity from '../IStoreEntity';
import {generateError, transformState} from '../transform';

export const adapter: EntityAdapter<ProductTypeEntity> = createEntityAdapter<ProductTypeEntity>();

export interface ProductTypeFeatureStore extends EntityState<ProductTypeEntity>, IStoreEntity {
}

export const initialProductTypeState: ProductTypeFeatureStore = adapter.getInitialState(
  {
    ids: [],
    entities: {}
  }
);

export function reducerProductType(state = initialProductTypeState, action: ProductTypeActionsType): ProductTypeFeatureStore {
  switch (action.type) {
    case ProductTypeActions.LOAD_PRODUCT_TYPES:
      return transformState(state, 'isLoading', true);
    case ProductTypeActions.LOAD_PRODUCT_TYPES_SUCCESS:
      return transformState(adapter.addAll(action.payload.productTypes, state), 'isLoading', false);
    case ProductTypeActions.LOAD_PRODUCT_TYPE:
      return transformState(state, 'isLoading', true);
    case ProductTypeActions.LOAD_PRODUCT_TYPE_SUCCESS:
      return transformState(adapter.addOne(action.payload.productType, state), 'isLoading', false);
    case ProductTypeActions.CREATE_PRODUCT_TYPE:
      return transformState(state, 'isCreating', true);
    case ProductTypeActions.CREATE_PRODUCT_TYPE_SUCCESS:
      return transformState(adapter.addOne(action.payload.productType, state), 'isCreating', false);
    case ProductTypeActions.UPDATE_PRODUCT_TYPE:
      return transformState(state, 'isUpdating', true);
    case ProductTypeActions.UPDATE_PRODUCT_TYPE_SUCCESS:
      const productType: Update<TypeEntity> = {
        id: action.payload.productType.id,
        changes: action.payload.productType
      };
      return transformState(adapter.updateOne(productType, state), 'isUpdating', true);
    case ProductTypeActions.DELETE_PRODUCT_TYPES:
      return transformState(state, 'isDeleting', true);
    case ProductTypeActions.DELETE_PRODUCT_TYPES_SUCCESS:
      return transformState(adapter.removeMany(action.payload.ids, state), 'isDeleting', true);
    case ProductTypeActions.REQUEST_PRODUCT_TYPE_FAILURE:
      return generateError(state, action.error);

    default:
      return state;
  }
}

export const selector: MemoizedSelector<object, ProductTypeFeatureStore> =
  createSelector((state: IRootStore) => state.productTypeState,
    (state: ProductTypeFeatureStore) => state);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = adapter.getSelectors(selector);
