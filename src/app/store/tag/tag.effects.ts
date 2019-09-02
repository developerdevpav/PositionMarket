import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as tagAction from './tag.actions';
import {TagActionTypes} from './tag.actions';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {TagEntity} from '../entities/tag.entity';
import {Observable, of} from 'rxjs';

@Injectable()
export class TagEffects {

  constructor(private actions$: Actions, private api: NsiAbstractService<TagEntity>) {}

  @Effect()
  public getAll = this.actions$.pipe(
    ofType<tagAction.LoadTags>(TagActionTypes.LOAD_TAGS),
    startWith(new tagAction.LoadTags()),
    switchMap(() => this.api.getAll('tags')
      .pipe(
        map((objects: TagEntity[]) => new tagAction.LoadTagsSuccess({tags: objects})),
        catchError(err => of(new tagAction.RequestTagFailure(err)))
      )
    )
  );

  @Effect()
  public getById = this.actions$.pipe(
    ofType<tagAction.GetTagById>(TagActionTypes.GET_TAG_BY_ID),
    map(action => action.payload.id),
    switchMap((id: string) => this.api.getById('tags', id)
      .pipe(
        map((object: TagEntity) => new tagAction.GetTagByIdSuccess({tag: object})),
        catchError(err => of(new tagAction.RequestTagFailure(err)))
      )
    )
  );

  @Effect()
  public create = this.actions$.pipe(
    ofType<tagAction.CreateTag>(TagActionTypes.CREATE_TAG),
    map(it => it.payload),
    switchMap((payload: {tag: TagEntity}) => this.api.create('tags', payload.tag)
      .pipe(
        map((object: TagEntity) => new tagAction.CreateTagSuccess({tag: object})),
        catchError(err => Observable.create(new tagAction.RequestTagFailure(err)))
      )
    )
  );

  @Effect()
  public update = this.actions$.pipe(
    ofType<tagAction.UpdateTag>(TagActionTypes.UPDATE_TAG),
    map(it => it.payload),
    switchMap((payload: {tag: TagEntity}) => this.api.update('tags', payload.tag)
      .pipe(
        map((object: TagEntity) => new tagAction.UpdateTagSuccess({ tag: object })),
        catchError(err => of(new tagAction.RequestTagFailure(err)))
      )
    )
  );

  @Effect()
  public deleteArray = this.actions$.pipe(
    ofType<tagAction.DeleteTags>(TagActionTypes.DELETE_TAGS),
    map(it => it.payload),
    switchMap(( payload: { ids: string[] } ) => this.api.deleteAll('tags', payload.ids)
      .pipe(
        map(() => {
          return new tagAction.DeleteTagsSuccess({ ids: payload.ids });
        }),
        catchError(err => Observable.create(new tagAction.RequestTagFailure(err)))
      )
    )
  );

}
