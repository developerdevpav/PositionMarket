import {ActionReducerMap} from '@ngrx/store';
import {PositionFeatureStore, reducerPosition} from './position/position.feature.store';
import {reducerLanguage} from './language/language.reducer';
import {Language} from './language/language.model';
import {ProductTypeFeatureStore, reducerProductType} from './product-type/product.type.feature.store';
import {reducerType, TypeFeatureState} from './type/type.feature.store';
import {tagReducer, TagState} from './tag/tag.reducer';

export interface IRootStore {
  positionState: PositionFeatureStore;
  languageState: Language;
  productTypeState: ProductTypeFeatureStore;
  typeState: TypeFeatureState;
  tagState: TagState;
}

export const reducers: ActionReducerMap<IRootStore> = {
  positionState: reducerPosition,
  languageState: reducerLanguage,
  productTypeState: reducerProductType,
  typeState: reducerType,
  tagState: tagReducer
};
