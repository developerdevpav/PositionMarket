import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AddType,
  ApiTypeCreate,
  ApiTypeDelete,
  ApiTypeLoadAll, ApiTypeLoadById,
  ApiTypeUpdate,
  DeleteTypes,
  LoadSuccessTypes,
  LoadTypeById,
  UpdateType
} from '../actions/type.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Type} from '../models/type.model';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {Action} from '@ngrx/store';
import {APIAction} from '../actions/abstarct.actions';


@Injectable()
export class TypeEffects {


  constructor(private actions$: Actions, private service: NsiAbstractService<Type>) {
  }

  @Effect()
  loadTypes$ = this.actions$
    .pipe(
      ofType(APIAction.LOAD_ALL + '[Type]'),
      mergeMap(() => this.service.getAll('types')
        .pipe(
          map((array: Type[]) => (new LoadSuccessTypes({types: array}))),
          catchError(() => EMPTY)
        ))
    );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.LOAD_BY_ID + '[Type]'),
    map((action: ApiTypeLoadById) => action.payload),
    switchMap((id) => this.service.getById('types', id)),
    map((typeLoad: Type) => new LoadTypeById({type: typeLoad}))
  );

  @Effect()
  create$: Observable<Action> = this.actions$
    .pipe(
      ofType(APIAction.CREATE + '[Type]'),
      map((action: ApiTypeCreate) => action.payload),
      switchMap((data) => this.service.create('types', data)
        .pipe(
          map((loadType: Type) => {
            console.log('load ' + loadType);
            return new AddType({type: loadType});
          }),
          catchError(error => EMPTY)
        ),
      ),
    );

  @Effect()
  update$: Observable<Action> = this.actions$
    .pipe(
      ofType(APIAction.UPDATE + '[Type]'),
      map((action: ApiTypeUpdate) => action.payload),
      switchMap(
        (object: Type) => this.service.update('types', object)
          .pipe(
            map(() => new UpdateType({
              type: {
                id: object.id,
                changes: object
              }
            }))
          )
      )
    );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.DELETE + '[Type]'),
    map((action: ApiTypeDelete) => action.payload),
    switchMap(
      (id: string[]) => this.service.deleteAll('types', id)
        .pipe(
          map(() => new DeleteTypes({ids: id}))
        )
    )
  );
}
