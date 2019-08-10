import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {TypeEntity} from '../entities/type.entity';
import {TypeActions, TypeActionTypes} from './type.actions';
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IRootStore} from '../index';

export const featureTypeEntityAdapter: EntityAdapter<TypeEntity> =
  createEntityAdapter<TypeEntity>();

export interface TypeFeatureState extends EntityState<TypeEntity> {
  isLoading?: boolean;
  error?: any;
}

export const initialProductTypeState: TypeFeatureState = featureTypeEntityAdapter.getInitialState(
  {
    ids: [],
    isLoading: false,
    entities: {},
    error: null
  }
);

export function reducerType(state = initialProductTypeState, action: TypeActions): TypeFeatureState {
  switch (action.type) {
    case TypeActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case TypeActionTypes.LOAD_SUCCESS: {
      return featureTypeEntityAdapter.addAll(action.typeEntities, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case TypeActionTypes.LOAD_FAILURE: {
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

export const selectTypeFeatureState: MemoizedSelector<object, TypeFeatureState> =
  createSelector((state: IRootStore) => state.typeState,
    (state: TypeFeatureState) => state);

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = featureTypeEntityAdapter.getSelectors(selectTypeFeatureState);
