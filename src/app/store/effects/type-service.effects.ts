import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadTypeServices, TypeServiceActionTypes} from '../actions/type-service.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Type} from '../models/type.model';
import {LoadTypes} from '../actions/type.actions';
import {EMPTY} from 'rxjs';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {TypeService} from '../models/type-service.model';

@Injectable()
export class TypeServiceEffects {

  constructor(private actions$: Actions, private service: NsiAbstractService<TypeService>) {}

  @Effect()
  $loadAllServiceType = this.actions$
    .pipe(
      ofType('[TypeService] load all api'),
      mergeMap(() => this.service.getAll('typeservices')
        .pipe(
          map((array: TypeService[]) => {
            console.log(array);
            return (new LoadTypeServices({ typeServices: array }));
          }),
          catchError(() => EMPTY)
        ))
    );
}
