import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {APIAction} from './abstarct.actions';
import {AttractionModel} from '../models/attraction-model';


export class ApiAttractionLoadAll implements Action {
  readonly type = APIAction.LOAD_ALL + '[Attraction]';
}

export class ApiAttractionLoadById implements Action {
  readonly type = APIAction.LOAD_BY_ID + '[Attraction]';

  constructor(public payload: string) {
  }
}

export class ApiAttractionCreate implements Action {
  readonly type = APIAction.CREATE + '[Attraction]';

  constructor(public payload: AttractionModel) {
  }
}

export class ApiAttractionUpdate implements Action {
  readonly type = APIAction.UPDATE + '[Attraction]';

  constructor(public payload: AttractionModel) {
  }
}

export class ApiAttractionDelete implements Action {
  readonly type = APIAction.DELETE + '[Attraction]';

  constructor(public payload: string) {
  }
}

export enum AttractionActionTypes {
  LOAD_SUCCESS_ATTRACTIONS = '[ATTRACTION] LOAD ATTRACTIONS',
  LOAD_SUCCESS_ATTRACTION = '[ATTRACTION] LOAD ATTRACTION',
  ADD_SUCCESS_ATTRACTION = '[ATTRACTION] ADD ATTRACTION',
  ADD_SUCCESS_ATTRACTIONS = '[ATTRACTION] ADD ATTRACTIONS',
  UPDATE_SUCCESS_ATTRACTION = '[ATTRACTION] UPDATE ATTRACTION',
  DELETE_SUCCESS_ATTRACTION = '[ATTRACTION] DELETE ATTRACTION',
  DELETE_SUCCESS_ATTRACTIONS = '[ATTRACTION] DELETE ATTRACTIONS',
}


export class LoadSuccessAttractions implements Action {
  readonly type = AttractionActionTypes.LOAD_SUCCESS_ATTRACTIONS;

  constructor(public payload: { attractions: AttractionModel[] }) {
  }
}

export class AddAttraction implements Action {
  readonly type = AttractionActionTypes.ADD_SUCCESS_ATTRACTION;

  constructor(public payload: { attraction: AttractionModel }) {
  }
}

export class LoadAttractionById implements Action {
  readonly type = AttractionActionTypes.LOAD_SUCCESS_ATTRACTION;

  constructor(public payload: { attraction: AttractionModel }) {
  }
}

export class AddAttractions implements Action {
  readonly type = AttractionActionTypes.ADD_SUCCESS_ATTRACTIONS;

  constructor(public payload: { attractions: AttractionModel[] }) {
  }
}

export class UpdateAttraction implements Action {
  readonly type = AttractionActionTypes.UPDATE_SUCCESS_ATTRACTION;

  constructor(public payload: { attraction: Update<AttractionModel> }) {
  }
}

export class DeleteAttraction implements Action {
  readonly type = AttractionActionTypes.DELETE_SUCCESS_ATTRACTION;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteAttractions implements Action {
  readonly type = AttractionActionTypes.DELETE_SUCCESS_ATTRACTIONS;

  constructor(public payload: { ids: string[] }) {
  }
}


export type AttractionActions =
  LoadSuccessAttractions |
  AddAttraction |
  AddAttractions |
  UpdateAttraction |
  DeleteAttraction |
  DeleteAttractions;
