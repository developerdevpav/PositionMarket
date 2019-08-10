import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LoadRequestTag, LoadSuccessTag, TagActionTypes} from './tag.actions';
import {TagEntity} from '../entities/tag.entity';

@Injectable()
export class TagEffects {

  constructor(private actions$: Actions, private service: NsiAbstractService<TagEntity>) {
  }

  @Effect()
  loadTagsEffect$ = this.actions$.pipe(
    ofType<LoadRequestTag>(TagActionTypes.LOAD_REQUEST),
    startWith(new LoadRequestTag()),
    switchMap(() => this.service.getAll('tags')
      .pipe(
        map((tags: TagEntity[]) => new LoadSuccessTag(tags)),
        catchError(error => Observable.create(new LoadSuccessTag(error)))
      )
    )
  );
}
