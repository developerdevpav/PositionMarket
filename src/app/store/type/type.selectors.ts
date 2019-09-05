import {IRootStore} from '../index';
import {createSelector} from '@ngrx/store';
import * as type from './type.feature.store';
import {TypeEntity} from '../entities/type.entity';
import {Dictionary} from '@ngrx/entity';
import * as converter from '../converters/converter';
import {TagEntity} from '../entities/tag.entity';
import * as languageSelector from '../language/language.selector';
import {Language} from '../language/language.model';

export const getError = (state: IRootStore): boolean => state.typeState.error;

export const getIsLoading = (state: IRootStore): boolean => state.typeState.isLoading;

export const selectIsLoading = createSelector(getIsLoading, (loading: boolean) => loading);

export const selectTypes = createSelector(type.selectAll, (productTypes: TypeEntity[]) => productTypes);

export const getById = createSelector(type.selectEntities, (dictionary: Dictionary<TypeEntity>, props: { id: string }) => {
  return dictionary[props.id];
});

export const selectTypesByLanguage = createSelector(type.selectAll, languageSelector.getCurrentLanguage,
  (entities: TagEntity[], language: Language) => {
    return converter.convertArrayNsi(entities, language);
  });
