import { Injectable } from '@angular/core';
import { NsiAbstractService } from '../services/nsi.abstract.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TypeEntity } from '../entities/type.entity';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as typeAction from './type.actions';

@Injectable()
export class TypeEffects {

  constructor(private actions$: Actions, private api: NsiAbstractService<TypeEntity>) { }

  @Effect()
  public getAll = this.actions$.pipe(
    ofType<typeAction.LoadTypes>(typeAction.TypeActionsEnum.LOAD_TYPES),
    startWith(new typeAction.LoadTypes()),
    switchMap(() => this.api.getAll('tags')
      .pipe(
        map((objects: TypeEntity[]) => new typeAction.LoadTypesSuccess({ types: objects })),
        catchError(err => Observable.create(new typeAction.RequestTypeFailure(err)))
      )
    )
  );

  @Effect()
  public getById = this.actions$.pipe(
    ofType<typeAction.GetTypeById>(typeAction.TypeActionsEnum.GET_TYPE_BY_ID),
    map(action => action.payload.id),
    switchMap((id: string) => this.api.getById('types', id)
      .pipe(
        map((object: TypeEntity) => new typeAction.GetTypeByIdSuccess({ type: object })),
        catchError(err => of(new typeAction.RequestTypeFailure(err)))
      )
    )
  );

  @Effect()
  public create = this.actions$.pipe(
    ofType<typeAction.CreateType>(typeAction.TypeActionsEnum.CREATE_TYPE),
    map(it => it.payload),
    switchMap((payload: { type: TypeEntity }) => this.api.create('types', payload.type)
      .pipe(
        map((object: TypeEntity) => new typeAction.CreateTypeSuccess({ type: object })),
        catchError(err => Observable.create(new typeAction.RequestTypeFailure(err)))
      )
    )
  );

  @Effect()
  public update = this.actions$.pipe(
    ofType<typeAction.UpdateType>(typeAction.TypeActionsEnum.UPDATE_TYPE),
    map(it => it.payload),
    switchMap((payload: { type: TypeEntity }) => this.api.update('types', payload.type)
      .pipe(
        map((object: TypeEntity) => new typeAction.UpdateTypeSuccess({ type: object })),
        catchError(err => Observable.create(new typeAction.RequestTypeFailure(err)))
      )
    )
  );

  @Effect()
  public delete = this.actions$.pipe(
    ofType<typeAction.DeleteType>(typeAction.TypeActionsEnum.DELETE_TYPE),
    map(it => it.payload),
    switchMap((payload: { id: string }) => this.api.delete('types', payload.id)
      .pipe(
        map((object: string) => new typeAction.DeleteTypeSuccess({ id: object })),
        catchError(err => Observable.create(new typeAction.RequestTypeFailure(err)))
      )
    )
  );

  @Effect()
  public deleteArray = this.actions$.pipe(
    ofType<typeAction.DeleteTypes>(typeAction.TypeActionsEnum.DELETE_TYPES),
    map(it => it.payload),
    switchMap((payload: { ids: string[] }) => this.api.deleteAll('types', payload.ids)
      .pipe(
        map((objects: string[]) => new typeAction.DeleteTypesSuccess({ ids: objects })),
        catchError(err => Observable.create(new typeAction.RequestTypeFailure(err)))
      )
    )
  );

}
