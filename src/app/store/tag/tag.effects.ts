import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as tagAction from './tag.actions';
import {TagActionTypes} from './tag.actions';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {TagEntity} from '../entities/tag.entity';
import {Observable} from 'rxjs';

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
        catchError(err => Observable.create(new tagAction.RequestTagFailure(err)))
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

}
