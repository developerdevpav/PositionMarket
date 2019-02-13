import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiTypeServiceLoadAll, LoadSuccessTypeServices} from '../actions/type-service.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {TypeService} from '../models/type-service.model';

@Injectable()
export class TypeServiceEffects {

  constructor(private actions$: Actions, private service: NsiAbstractService<TypeService>) {}

  @Effect()
  $loadAllServiceType = this.actions$
    .pipe(
      ofType(new ApiTypeServiceLoadAll().type),
      mergeMap(() => this.service.getAll('typeservices')
        .pipe(
          map((array: TypeService[]) => {
            console.log(array);
            return (new LoadSuccessTypeServices({ typeServices: array }));
          }),
          catchError(() => EMPTY)
        ))
    );
}
