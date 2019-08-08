import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PositionService} from '../services/position.service';
import {LoadFailurePositions, LoadRequestPositions, LoadSuccessPositions, PositionActionTypes} from './position.actions';
import {PositionEntity} from '../entities/position.entity';


@Injectable()
export class PositionEffects {

  constructor(private actions$: Actions, private positionService: PositionService) {
  }

  @Effect()
  loadPositionsEffect$ = this.actions$.pipe(
    ofType<LoadRequestPositions>(
      PositionActionTypes.LOAD_REQUEST
    ),
    startWith(new LoadRequestPositions()),
    switchMap(() => this.positionService.getAll('positions')
      .pipe(
        map(
          (positions: PositionEntity[]) =>
            new LoadSuccessPositions(positions)
        ),
        catchError(error =>
          Observable.create(new LoadFailurePositions(error))
        )
      )
    )
  );

}
