import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadTypes, TypeActionTypes} from '../actions/type.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Type} from '../models/type.model';
import {EMPTY} from 'rxjs';
import {selectAll} from '../reducers/tag.reducer';
import {LoadTags, TagActionTypes} from '../actions/tag.actions';
import {Tag} from '../models/tag.model';
import {NsiAbstractService} from '../services/nsi.abstract.service';


@Injectable()
export class TagEffects {

  constructor(private actions$: Actions, private service: NsiAbstractService<Tag>) {}

  @Effect()
  loadTags$ = this.actions$
    .pipe(
      ofType(TagActionTypes.LoadTagsApi),
      mergeMap(() => this.service.getAll('tags')
        .pipe(
          map((array: Tag[]) => ( new LoadTags({ tags: array }) )),
          catchError(() => EMPTY)
        ))
    );

}
