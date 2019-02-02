import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadTypes, TypeActions, TypeActionTypes} from '../actions/type.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {TypeService} from '../services/type.service';
import {EMPTY} from 'rxjs';
import {Type} from '../models/type.model';


@Injectable()
export class TypeEffects {


  constructor(private actions$: Actions, private typeService: TypeService) {}

  @Effect()
  loadTypes$ = this.actions$
    .pipe(
      ofType(TypeActionTypes.LoadTypes),
      mergeMap(() => this.typeService.getAll()
        .pipe(
          map((array: Type[]) => ( new LoadTypes({ types: array }) )),
          catchError(() => EMPTY)
        ))
    );
}
