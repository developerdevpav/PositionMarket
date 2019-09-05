import {Action} from '@ngrx/store';
import {PositionEntity} from '../entities/position.entity';

export enum PositionActionEnum {
  LOAD_POSITIONS = '[Position] Load Positions',
  LOAD_POSITIONS_SUCCESS = '[Position] Load Positions SUCCESS',
  REQUEST_POSITION_FAILURE = '[Position] FAILURE',

  CREATE_POSITION = '[Position] Add Position',
  CREATE_POSITION_SUCCESS = '[Position] Add Position SUCCESS',

  UPDATE_POSITION = '[Position] Update Position',
  UPDATE_POSITION_SUCCESS = '[Position] Update Position SUCCESS',

  DELETE_POSITION = '[Position] Delete Position',
  DELETE_POSITION_SUCCESS = '[Position] Delete Position SUCCESS',

  DELETE_POSITIONS = '[Position] Delete Positions',
  DELETE_POSITIONS_SUCCESS = '[Position] Delete Positions SUCCESS'
}

export class RequestPositionFailure implements Action {
  readonly type = PositionActionEnum.REQUEST_POSITION_FAILURE;

  constructor(public error?: string) {
  }
}

export class LoadPositions implements Action {
  readonly type = PositionActionEnum.LOAD_POSITIONS;
}

export class LoadPositionsSuccess implements Action {
  readonly type = PositionActionEnum.LOAD_POSITIONS_SUCCESS;

  constructor(public payload: { positions: PositionEntity[] }) { }
}

export class CreatePosition implements Action {
  readonly type = PositionActionEnum.CREATE_POSITION;

  constructor(public payload: { position: PositionEntity }) {
  }
}

export class CreatePositionSuccess implements Action {
  readonly type = PositionActionEnum.CREATE_POSITION_SUCCESS;

  constructor(public payload: { position: PositionEntity }) {
  }
}

export class UpdatePosition implements Action {
  readonly type = PositionActionEnum.UPDATE_POSITION;

  constructor(public payload: { position: PositionEntity }) {
  }
}

export class UpdatePositionSuccess implements Action {
  readonly type = PositionActionEnum.UPDATE_POSITION_SUCCESS;

  constructor(public payload: { position: PositionEntity }) {
  }
}

export class DeletePosition implements Action {
  readonly type = PositionActionEnum.DELETE_POSITION;

  constructor(public payload: { id: string }) {
  }
}

export class DeletePositionSuccess implements Action {
  readonly type = PositionActionEnum.DELETE_POSITION_SUCCESS;

  constructor(public payload: { id: string }) {
  }
}

export class DeletePositions implements Action {
  readonly type = PositionActionEnum.DELETE_POSITIONS;

  constructor(public payload: { ids: string[] }) {
  }
}

export class DeletePositionsSuccess implements Action {
  readonly type = PositionActionEnum.DELETE_POSITIONS_SUCCESS;

  constructor(public payload: { ids: string[] }) {
  }
}

export type ProductPositionActionsPosition =
  RequestPositionFailure
  | LoadPositions
  | LoadPositionsSuccess
  | CreatePosition
  | CreatePositionSuccess
  | UpdatePosition
  | UpdatePositionSuccess
  | DeletePosition
  | DeletePositionSuccess
  | DeletePositions
  | DeletePositionsSuccess;

