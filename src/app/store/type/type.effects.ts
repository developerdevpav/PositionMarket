import {Injectable} from '@angular/core';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TypeEntity} from '../entities/type.entity';
import {LoadRequestType, LoadSuccessType, TypeActionTypes} from './type.actions';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class TypeEffects {

  constructor(private actions$: Actions, private service: NsiAbstractService<TypeEntity>) {}

  @Effect()
  loadTypesEffect$ = this.actions$.pipe(
    ofType<LoadRequestType>(
      TypeActionTypes.LOAD_REQUEST
    ),
    startWith(new LoadRequestType()),
    switchMap(() => this.service.getAll('types')
      .pipe(
        map(
          (types: TypeEntity[]) =>
            new LoadSuccessType(types)
        ),
        catchError(error =>
          Observable.create(new LoadSuccessType(error))
        )
      )
    )
  );
}
