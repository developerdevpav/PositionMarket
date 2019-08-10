import {Action} from '@ngrx/store';
import {TagEntity} from '../entities/tag.entity';

export enum TagActionTypes {
  LOAD_REQUEST = '[Tag] Load Request',
  LOAD_FAILURE = '[Tag] Load Failure',
  LOAD_SUCCESS = '[Tag] Load Success'
}

export class LoadRequestTag implements Action {
  readonly type = TagActionTypes.LOAD_REQUEST;
}

export class LoadSuccessTag implements Action {
  readonly type = TagActionTypes.LOAD_SUCCESS;
  constructor(public tagEntities: TagEntity[]) {}
}

export class LoadFailureTag implements Action {
  readonly type = TagActionTypes.LOAD_FAILURE;
  constructor(public error: string) {}
}

export type TagActions =
  LoadFailureTag |
  LoadSuccessTag |
  LoadRequestTag;
