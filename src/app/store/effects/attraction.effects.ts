import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {APIAction} from '../actions/abstarct.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {AttractionService} from '../services/attraction.service';
import {AttractionModel} from '../models/attraction-model';
import {
  AddAttraction,
  ApiAttractionCreate, ApiAttractionDelete, ApiAttractionLoadById,
  ApiAttractionUpdate, DeleteAttraction, LoadAttractionById,
  LoadSuccessAttractions,
  UpdateAttraction
} from '../actions/attraction.actions';

@Injectable()
export class AttractionEffects {

  constructor(private actions$: Actions, private service: AttractionService) {
  }

  @Effect()
  loadAttractions$ = this.actions$
    .pipe(
      ofType(APIAction.LOAD_ALL + '[Attraction]'),
      mergeMap(() => this.service.getAll('attractions')
        .pipe(
          map((array: AttractionModel[]) => (new LoadSuccessAttractions({attractions: array}))),
          catchError(() => {
            console.log('error load attractions');
            return EMPTY;
          })
        ))
    );


  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.LOAD_BY_ID + '[Attraction]'),
    map((action: ApiAttractionLoadById) => action.payload),
    switchMap((id) => this.service.getById('attractions', id)),
    map((attractionLoad: AttractionModel) => new LoadAttractionById({attraction: attractionLoad}))
  );

  @Effect()
  create$: Observable<Action> = this.actions$
    .pipe(
      ofType(APIAction.CREATE + '[Attraction]'),
      map((action: ApiAttractionCreate) => action.payload),
      switchMap((data) => this.service.create('attractions', data).pipe(
        map((loadAttraction: AttractionModel) => {
          console.log('load ' + loadAttraction);
          return new AddAttraction({attraction: loadAttraction});
        }),
        catchError(error => EMPTY)
        ),
      ),
    );

  @Effect()
  update$: Observable<Action> = this.actions$
    .pipe(
      ofType(APIAction.UPDATE + '[Attraction]'),
      map((action: ApiAttractionUpdate) => {
        return action.payload;
      }),
      switchMap(
        (object: AttractionModel) => this.service.update('attractions', object)
          .pipe(
            map(() => new UpdateAttraction({
              attraction: {
                id: object.id,
                changes: object
              }
            }))
          )
      )
    );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.DELETE + '[Attraction]'),
    map((action: ApiAttractionDelete) => {
      console.log('Deleted: ' + action.payload);
      return action.payload;
    }),
    switchMap(
      (index: string) => this.service.delete('attractions', index)
        .pipe(
          map(() => new DeleteAttraction({ id: index }))
        )
    )
  );
}
