import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {
  AddTag,
  ApiTagCreate,
  ApiTagDelete,
  ApiTagLoadAll,
  ApiTagLoadById,
  DeleteTag,
  DeleteTags,
  LoadSuccessTags,
  LoadTagById,
  TagActionTypes
} from '../actions/tag.actions';
import {Tag} from '../models/tag.model';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {APIAction} from '../actions/abstarct.actions';
import {Action} from '@ngrx/store';


@Injectable()
export class TagEffects {

  constructor(private actions$: Actions, private service: NsiAbstractService<Tag>) {
  }

  @Effect()
  loadTags$ = this.actions$
    .pipe(
      ofType(APIAction.LOAD_ALL + '[Tag]'),
      mergeMap(() => this.service.getAll('tags')
        .pipe(
          map((array: Tag[]) => (new LoadSuccessTags({tags: array}))),
          catchError(() => {
            console.log('error load tags');
            return EMPTY;
          })
        ))
    );


  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.LOAD_BY_ID + '[Tag]'),
    map((action: ApiTagLoadById) => action.payload),
    switchMap((id) => this.service.getById('tags', id)),
    map((tag: Tag) => new LoadTagById({tag: tag}))
  );

  @Effect()
  create$: Observable<Action> = this.actions$
    .pipe(
      ofType(APIAction.CREATE + '[Tag]'),
      map((action: ApiTagCreate) => {
        console.log('Deleted: ' + action.payload);
        return action.payload;
      }),
      switchMap(
        (object: Tag) => this.service.create('tags', object)
          .pipe(
            map(() => new AddTag({tag: object}))
          )
      )
    );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.DELETE + '[Tag]'),
    map((action: ApiTagDelete) => {
      console.log('Deleted: ' + action.payload);
      return action.payload;
    }),
    switchMap(
      (id: string[]) => this.service.deleteAll('tags', id)
        .pipe(
          map(() => new DeleteTags({ids: id}))
        )
    )
  );
}
