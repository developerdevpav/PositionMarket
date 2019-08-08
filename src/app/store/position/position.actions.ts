import {Action} from '@ngrx/store';
import {PositionEntity} from '../entities/position.entity';

export enum PositionActionTypes {
  LOAD_REQUEST = '[Position] Load Request',
  LOAD_FAILURE = '[Position] Load Failure',
  LOAD_SUCCESS = '[Position] Load Success'
}

export class LoadRequestPositions implements Action {
  readonly type = PositionActionTypes.LOAD_REQUEST;
}

export class LoadSuccessPositions implements Action {
  readonly type = PositionActionTypes.LOAD_SUCCESS;
  constructor(public positions: PositionEntity[]) {}
}

export class LoadFailurePositions implements Action {
  readonly type = PositionActionTypes.LOAD_FAILURE;
  constructor(public error: string) {}
}

export type PositionActions = LoadSuccessPositions | LoadRequestPositions | LoadFailurePositions;
