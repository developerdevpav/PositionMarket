import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PositionService } from '../services/position.service';
import * as positionAction from './position.actions';
import { PositionEntity } from '../entities/position.entity';


@Injectable()
export class PositionEffects {

  constructor(private actions$: Actions, private api: PositionService) { }

  @Effect()
  loadProductTypesEffect$ = this.actions$.pipe(
    ofType<positionAction.LoadPositions>(positionAction.PositionActionEnum.LOAD_POSITIONS),
    startWith(new positionAction.LoadPositions),
    switchMap(() => this.api.getAll('positions')
      .pipe(
        map((objects: PositionEntity[]) => new positionAction.LoadPositionsSuccess({ positions: objects })),
        catchError(error => Observable.create(new positionAction.RequestPositionFailure(error)))
      )
    )
  );

  @Effect()
  public create = this.actions$.pipe(
    ofType<positionAction.CreatePosition>(positionAction.PositionActionEnum.CREATE_POSITION),
    map(it => it.payload),
    switchMap((payload: { position: PositionEntity }) => this.api.create('positions', payload.position)
      .pipe(
        map((object: PositionEntity) => new positionAction.CreatePositionSuccess({ position: object })),
        catchError(err => Observable.create(new positionAction.RequestPositionFailure(err)))
      )
    )
  );

  @Effect()
  public update = this.actions$.pipe(
    ofType<positionAction.UpdatePosition>(positionAction.PositionActionEnum.UPDATE_POSITION),
    map(it => it.payload),
    switchMap((payload: { position: PositionEntity }) => this.api.update('positions', payload.position)
      .pipe(
        map((object: PositionEntity) => new positionAction.UpdatePositionSuccess({ position: object })),
        catchError(err => Observable.create(new positionAction.RequestPositionFailure(err)))
      )
    )
  );

  @Effect()
  public delete = this.actions$.pipe(
    ofType<positionAction.DeletePosition>(positionAction.PositionActionEnum.DELETE_POSITION),
    map(it => it.payload),
    switchMap((payload: { id: string }) => this.api.delete('positions', payload.id)
      .pipe(
        map((object: string) => new positionAction.DeletePositionSuccess({ id: object })),
        catchError(err => Observable.create(new positionAction.RequestPositionFailure(err)))
      )
    )
  );

  @Effect()
  public deleteArray = this.actions$.pipe(
    ofType<positionAction.DeletePositions>(positionAction.PositionActionEnum.DELETE_POSITIONS),
    map(it => it.payload),
    switchMap((payload: { ids: string[] }) => this.api.deleteArray('positions', payload.ids)
      .pipe(
        map((objects: string[]) => new positionAction.DeletePositionsSuccess({ ids: objects })),
        catchError(err => Observable.create(new positionAction.RequestPositionFailure(err)))
      )
    )
  );

}
