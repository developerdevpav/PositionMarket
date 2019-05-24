import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {APIAction} from '../actions/abstarct.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {AttractionService} from '../services/attraction.service';
import {AttractionModel} from '../models/attraction-model';
import {
  AddAttraction,
  ApiAttractionCreate,
  ApiAttractionLoadById,
  ApiAttractionsDelete,
  ApiAttractionUpdate,
  DeleteAttractions,
  LoadAttractionById,
  LoadSuccessAttractions,
  UpdateAttraction
} from '../actions/attraction.actions';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AttractionEffects {

  constructor(private actions$: Actions, private service: AttractionService, private snackBar: MatSnackBar) {
  }

  @Effect()
  loadAttractions$ = this.actions$
    .pipe(
      ofType(APIAction.LOAD_ALL + '[Attraction]'),
      mergeMap(() => this.service.getAll('attractions')
        .pipe(
          map((array: AttractionModel[]) => {
            return (new LoadSuccessAttractions({attractions: array}));
          }),
          catchError((error) => {
            return EMPTY;
          })
        ))
    );


  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.LOAD_BY_ID + '[Attraction]'),
    map((action: ApiAttractionLoadById) => action.payload),
    switchMap((id) => this.service.getById('attractions', id)),
    map((attractionLoad: AttractionModel) => {
      return new LoadAttractionById({attraction: attractionLoad});
    }),
    catchError((e) => {
      return EMPTY;
    })
  );

  @Effect()
  create$: Observable<Action> = this.actions$
    .pipe(
      ofType(APIAction.CREATE + '[Attraction]'),
      map((action: ApiAttractionCreate) => action.payload),
      switchMap((data) => this.service.create('attractions', data).pipe(
        map((loadAttraction: AttractionModel) => {
          return new AddAttraction({attraction: loadAttraction});
        }),
        catchError((e) => {
          return EMPTY;
        })
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
            map(() => {
              return new UpdateAttraction({
                attraction: {
                  id: object.id,
                  changes: object
                }
              });
            }),
            catchError((e) => {
              return EMPTY;
            })
          )
      )
    );

  @Effect()
  deleteArrayPosition$: Observable<Action> = this.actions$.pipe(
    ofType(APIAction.DELETE + '[Attraction]'),
    map((action: ApiAttractionsDelete) => {
      console.log('Deleted: ' + action.payload);
      return action.payload;
    }),
    switchMap(
      (index: string[]) => this.service.deleteArray('attractions', index)
        .pipe(
          map(() => {
            return new DeleteAttractions({ ids: index });
          }),
          catchError((e) => {
            return EMPTY;
          })
        )
    )
  );
}
