import {Action} from '@ngrx/store';

export enum TagActionTypes {
  LoadTags = '[Tag] Load Tags'
}

export class LoadTags implements Action {
  readonly type = TagActionTypes.LoadTags;
}


export type TagActions = LoadTags;
