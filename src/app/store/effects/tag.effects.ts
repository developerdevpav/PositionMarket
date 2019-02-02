import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadTypes, TypeActionTypes} from '../actions/type.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Type} from '../models/type.model';
import {EMPTY} from 'rxjs';
import {TagService} from '../services/tag.service';
import {selectAll} from '../reducers/tag.reducer';
import {LoadTags, TagActionTypes} from '../actions/tag.actions';
import {Tag} from '../models/tag.model';


@Injectable()
export class TagEffects {

  constructor(private actions$: Actions, private tagService: TagService) {}

  @Effect()
  loadTags$ = this.actions$
    .pipe(
      ofType(TagActionTypes.LoadTags),
      mergeMap(() => this.tagService.getAll()
        .pipe(
          map((array: Tag[]) => ( new LoadTags({ tags: array }) )),
          catchError(() => EMPTY)
        ))
    );
}
