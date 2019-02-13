import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Tag} from '../models/tag.model';
import {APIAction} from './abstarct.actions';


export class ApiTagLoadAll implements Action {
  readonly type = APIAction.LOAD_ALL + '[Tag]';
}

export class ApiTagLoadById implements Action {
  readonly type = APIAction.LOAD_BY_ID + '[Tag]';

  constructor(public payload: string) {
  }
}

export class ApiTagCreate implements Action {
  readonly type = APIAction.CREATE + '[Tag]';

  constructor(public payload: Tag) {
  }
}

export class ApiTagUpdate implements Action {
  readonly type = APIAction.UPDATE + '[Tag]';

  constructor(public payload: Tag) {
  }
}

export class ApiTagDelete implements Action {
  readonly type = APIAction.DELETE + '[Tag]';

  constructor(public payload: string[]) {
  }
}

export enum TagActionTypes {
  LOAD_SUCCESS_TAGS = '[TAG] LOAD TAGS',
  LOAD_SUCCESS_TAG = '[TAG] LOAD TAG',
  ADD_SUCCESS_TAG = '[TAG] ADD TAG',
  ADD_SUCCESS_TAGS = '[TAG] ADD TAGS',
  UPDATE_SUCCESS_TAG = '[TAG] UPDATE TAG',
  DELETE_SUCCESS_TAG = '[TAG] DELETE TAG',
  DELETE_SUCCESS_TAGS = '[TAG] DELETE TAGS',
}


export class LoadSuccessTags implements Action {
  readonly type = TagActionTypes.LOAD_SUCCESS_TAGS;

  constructor(public payload: { tags: Tag[] }) {
  }
}

export class AddTag implements Action {
  readonly type = TagActionTypes.ADD_SUCCESS_TAG;

  constructor(public payload: { tag: Tag }) {
  }
}

export class LoadTagById implements Action {
  readonly type = TagActionTypes.LOAD_SUCCESS_TAG;

  constructor(public payload: { tag: Tag }) {
  }
}

export class AddTags implements Action {
  readonly type = TagActionTypes.ADD_SUCCESS_TAGS;

  constructor(public payload: { tags: Tag[] }) {
  }
}

export class UpdateTag implements Action {
  readonly type = TagActionTypes.UPDATE_SUCCESS_TAG;

  constructor(public payload: { tag: Update<Tag> }) {
  }
}

export class DeleteTag implements Action {
  readonly type = TagActionTypes.DELETE_SUCCESS_TAG;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTags implements Action {
  readonly type = TagActionTypes.DELETE_SUCCESS_TAGS;

  constructor(public payload: { ids: string[] }) {
  }
}


export type TagActions =
  LoadSuccessTags |
  AddTag |
  AddTags |
  UpdateTag |
  DeleteTag |
  DeleteTags;
