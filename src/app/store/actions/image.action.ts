import {Action} from '@ngrx/store';
import {APIAction} from './abstarct.actions';
import {ImageModel} from '../models/image.model';
import {Update} from '@ngrx/entity';

export class ApiImageLoadAll implements Action {
  readonly type = APIAction.LOAD_ALL + '[Image]';
}

export class ApiImageUpload implements Action {
  readonly type = APIAction.CREATE + '[Image]';

  constructor(public payload: FileList) {}
}

export class ApiImageDelete implements Action {
  readonly type = APIAction.DELETE + '[Image]';

  constructor(public payload: string) {
  }
}

export enum ImageActionTypes {
  LOAD_SUCCESS_IMAGES = '[IMAGE] LOAD IMAGES',
  LOAD_SUCCESS_IMAGE = '[IMAGE] LOAD IMAGE',
  ADD_SUCCESS_IMAGE = '[IMAGE] ADD IMAGE',
  ADD_SUCCESS_IMAGES = '[IMAGE] ADD IMAGES',
  UPDATE_SUCCESS_IMAGE = '[IMAGE] UPDATE IMAGE',
  DELETE_SUCCESS_IMAGE = '[IMAGE] DELETE IMAGE',
  DELETE_SUCCESS_IMAGES = '[IMAGE] DELETE IMAGES',
}


export class LoadSuccessImages implements Action {
  readonly type = ImageActionTypes.LOAD_SUCCESS_IMAGES;

  constructor(public payload: ImageModel[]) {
  }
}

export class AddImage implements Action {
  readonly type = ImageActionTypes.ADD_SUCCESS_IMAGE;

  constructor(public payload: { image: ImageModel }) {
  }
}

export class LoadImageById implements Action {
  readonly type = ImageActionTypes.LOAD_SUCCESS_IMAGE;

  constructor(public payload: { image: ImageModel }) {
  }
}

export class AddImages implements Action {
  readonly type = ImageActionTypes.ADD_SUCCESS_IMAGES;

  constructor(public payload: { images: ImageModel[] }) {
  }
}

export class UpdateImage implements Action {
  readonly type = ImageActionTypes.UPDATE_SUCCESS_IMAGE;

  constructor(public payload: { image: Update<ImageModel> }) {
  }
}

export class DeleteImage implements Action {
  readonly type = ImageActionTypes.DELETE_SUCCESS_IMAGE;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteImages implements Action {
  readonly type = ImageActionTypes.DELETE_SUCCESS_IMAGES;

  constructor(public payload: { ids: string[] }) {
  }
}


export type ImageActions =
  LoadSuccessImages |
  AddImage |
  AddImages |
  UpdateImage |
  DeleteImage |
  DeleteImages;
