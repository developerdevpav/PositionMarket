import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Tag } from '../models/tag.model';
import {TypeActionTypes} from './type.actions';

export enum TagActionTypes {
  LoadTags = '[Tag] Load Tags',
  AddTag = '[Tag] Add Tag',
  UpsertTag = '[Tag] Upsert Tag',
  AddTags = '[Tag] Add Tags',
  UpsertTags = '[Tag] Upsert Tags',
  UpdateTag = '[Tag] Update Tag',
  UpdateTags = '[Tag] Update Tags',
  DeleteTag = '[Tag] Delete Tag',
  DeleteTags = '[Tag] Delete Tags',
  ClearTags = '[Tag] Clear Tags'
}

export class LoadTags implements Action {
  readonly type = TagActionTypes.LoadTags;

  constructor(public payload: { tags: Tag[] }) {}
}

export class AddTag implements Action {
  readonly type = TagActionTypes.AddTag;

  constructor(public payload: { tag: Tag }) {}
}

export class UpsertTag implements Action {
  readonly type = TagActionTypes.UpsertTag;

  constructor(public payload: { tag: Tag }) {}
}

export class AddTags implements Action {
  readonly type = TagActionTypes.AddTags;

  constructor(public payload: { tags: Tag[] }) {}
}

export class UpsertTags implements Action {
  readonly type = TagActionTypes.UpsertTags;

  constructor(public payload: { tags: Tag[] }) {}
}

export class UpdateTag implements Action {
  readonly type = TagActionTypes.UpdateTag;

  constructor(public payload: { tag: Update<Tag> }) {}
}

export class UpdateTags implements Action {
  readonly type = TagActionTypes.UpdateTags;

  constructor(public payload: { tags: Update<Tag>[] }) {}
}

export class DeleteTag implements Action {
  readonly type = TagActionTypes.DeleteTag;

  constructor(public payload: { id: string }) {}
}

export class DeleteTags implements Action {
  readonly type = TagActionTypes.DeleteTags;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearTags implements Action {
  readonly type = TagActionTypes.ClearTags;
}

export type TagActions =
 LoadTags
 | AddTag
 | UpsertTag
 | AddTags
 | UpsertTags
 | UpdateTag
 | UpdateTags
 | DeleteTag
 | DeleteTags
 | ClearTags;
