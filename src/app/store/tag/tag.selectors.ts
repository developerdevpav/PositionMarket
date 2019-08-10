import {TagEntity} from '../entities/tag.entity';
import {createSelector} from '@ngrx/store';
import {IRootStore} from '../index';
import {selectAll} from './tag.feature.store';


export const getError = (state: IRootStore): boolean => state.tagState.error;

export const getIsLoading = (state: IRootStore): boolean => state.tagState.isLoading;

export const selectIsLoading = createSelector(getIsLoading, (loading: boolean) => loading);

export const selectTags = createSelector(selectAll, (tagEntities: TagEntity[]) => tagEntities);
