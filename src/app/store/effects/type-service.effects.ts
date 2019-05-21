import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AddTypeService,
  ApiTypeServiceDelete,
  ApiTypeServiceLoadById,
  ApiTypeServiceUpdate,
  DeleteTypeServices,
  LoadSuccessTypeServices,
  LoadTypeServiceById,
  UpdateTypeService
} from '../actions/type-service.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {TypeService} from '../models/type-service.model';
import {ApiTypeCreate} from '../actions/type.actions';
import {Action} from '@ngrx/store';
import {APIAction} from '../actions/abstarct.actions';

@Injectable()
export class TypeServiceEffects {

  constructor(private actions$: Actions, private service: NsiAbstractService<TypeService>) { }

  @Effect()
  loadTypeServices$ = this.actions$
    .pipe(
      ofType(APIAction.LOAD_ALL + '[TypeService]'),
      mergeMap(() => this.service.getAll('typeservices')
        .pipe(
          map((array: TypeService[]) => {
            console.log(array);
            return (new LoadSuccessTypeServices({ typeServices: array }))
          }),
          catchError(() => EMPTY)
        ))
    );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.LOAD_BY_ID + '[TypeService]'),
    map((action: ApiTypeServiceLoadById) => action.payload),
    switchMap((id) => this.service.getById('typeservices', id)),
    map((typeLoad: TypeService) => new LoadTypeServiceById({ typeServices: typeLoad }))
  );

  @Effect()
  create$: Observable<Action> = this.actions$
    .pipe(
      ofType(APIAction.CREATE + '[TypeService]'),
      map((action: ApiTypeCreate) => action.payload),
      switchMap((data: TypeService) => this.service.create('typeservices', data)
        .pipe(
          map((loadTypeService: TypeService) => {
            return new AddTypeService({ typeService: loadTypeService });
          }),
          catchError(error => EMPTY)
        ),
      ),
    );

  @Effect()
  update$: Observable<Action> = this.actions$
    .pipe(
      ofType(APIAction.UPDATE + '[TypeService]'),
      map((action: ApiTypeServiceUpdate) => action.payload),
      switchMap(
        (object: TypeService) => this.service.update('typeservices', object)
          .pipe(
            map(() => new UpdateTypeService({
              typeService: {
                id: object.id,
                changes: object
              }
            }))
          )
      )
    );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.DELETE + '[TypeService]'),
    map((action: ApiTypeServiceDelete) => action.payload),
    switchMap(
      (id: string[]) => this.service.deleteAll('typeservices', id)
        .pipe(
          map(() => new DeleteTypeServices({ ids: id }))
        )
    )
  );
}
