import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {TagEntity} from '../entities/tag.entity';

export enum TagActionTypes {
  LOAD_TAGS = '[Tag] Load Tags',
  LOAD_TAGS_SUCCESS = '[Tag] Load Tags SUCCESS',
  REQUEST_TAG_FAILURE = '[Tag] FAILURE',

  CREATE_TAG = '[Tag] Add Tag',
  CREATE_TAG_SUCCESS = '[Tag] Add Tag SUCCESS',

  UPDATE_TAG = '[Tag] Update Tag',
  UPDATE_TAG_SUCCESS = '[Tag] Update Tag SUCCESS',

  DELETE_TAG = '[Tag] Delete Tag',
  DELETE_TAG_SUCCESS = '[Tag] Delete Tag SUCCESS',

  DELETE_TAGS = '[Tag] Delete Tags',
  DELETE_TAGS_SUCCESS = '[Tag] Delete Tags SUCCESS'
}

export class RequestTagFailure implements Action {
  readonly type = TagActionTypes.REQUEST_TAG_FAILURE;

  constructor(public error?: string) {
  }
}


export class LoadTags implements Action {
  readonly type = TagActionTypes.LOAD_TAGS;
}

export class LoadTagsSuccess implements Action {
  readonly type = TagActionTypes.LOAD_TAGS_SUCCESS;

  constructor(public payload: { tags: TagEntity[] }) {
  }
}

export class CreateTag implements Action {
  readonly type = TagActionTypes.CREATE_TAG;

  constructor(public payload: { tag: TagEntity }) {
  }
}

export class CreateTagSuccess implements Action {
  readonly type = TagActionTypes.CREATE_TAG_SUCCESS;

  constructor(public payload: { tag: TagEntity }) {
  }
}

export class UpdateTag implements Action {
  readonly type = TagActionTypes.UPDATE_TAG;

  constructor(public payload: { tag: Update<TagEntity> }) {
  }
}

export class UpdateTagSuccess implements Action {
  readonly type = TagActionTypes.UPDATE_TAG_SUCCESS;

  constructor(public payload: { tag: Update<TagEntity> }) {
  }
}

export class DeleteTag implements Action {
  readonly type = TagActionTypes.DELETE_TAG;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTagSuccess implements Action {
  readonly type = TagActionTypes.DELETE_TAG_SUCCESS;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTags implements Action {
  readonly type = TagActionTypes.DELETE_TAGS;

  constructor(public payload: { ids: string[] }) {
  }
}

export class DeleteTagsSuccess implements Action {
  readonly type = TagActionTypes.DELETE_TAGS_SUCCESS;

  constructor(public payload: { ids: string[] } ) {}
}


export type TagActions =
  LoadTags
  | LoadTagsSuccess
  | CreateTag
  | CreateTagSuccess
  | UpdateTag
  | UpdateTagSuccess
  | DeleteTag
  | DeleteTagSuccess
  | DeleteTags
  | DeleteTagsSuccess;
