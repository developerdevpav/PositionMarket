import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiTypeLoadAll, LoadSuccessTypes} from '../actions/type.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {Type} from '../models/type.model';
import {NsiAbstractService} from '../services/nsi.abstract.service';


@Injectable()
export class TypeEffects {


  constructor(private actions$: Actions, private service: NsiAbstractService<Type>) {}

  @Effect()
  loadTypes$ = this.actions$
    .pipe(
      ofType(new ApiTypeLoadAll().type),
      mergeMap(() => this.service.getAll('types')
        .pipe(
          map((array: Type[]) => ( new LoadSuccessTypes({ types: array }) )),
          catchError(() => EMPTY)
        ))
    );
}
