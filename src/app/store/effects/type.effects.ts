import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadTypes, LoadTypesApi, TypeActions, TypeActionTypes} from '../actions/type.actions';
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
      ofType(TypeActionTypes.LoadTypesApi),
      mergeMap(() => this.service.getAll('types')
        .pipe(
          map((array: Type[]) => ( new LoadTypes({ types: array }) )),
          catchError(() => EMPTY)
        ))
    );
}
