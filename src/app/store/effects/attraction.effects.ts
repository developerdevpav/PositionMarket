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
import {SnackBarComponent} from '../../components/universal/snack-bar/snack-bar.component';

@Injectable()
export class AttractionEffects {

  constructor(private actions$: Actions, private service: AttractionService, private snackBar: MatSnackBar) {
  }

  openSnackBar(msg: string, err: boolean = false) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      panelClass: err ? 'red-snackbar' : 'green-snackbar',
      data: {
        message: msg,
        error: err
      }
    });
  }

  @Effect()
  loadAttractions$ = this.actions$
    .pipe(
      ofType(APIAction.LOAD_ALL + '[Attraction]'),
      mergeMap(() => this.service.getAll('attractions')
        .pipe(
          map((array: AttractionModel[]) => {
            this.openSnackBar('Successfully loaded ' + array.length + ' position');
            return (new LoadSuccessAttractions({attractions: array}));
          }),
          catchError((error) => {
            this.openSnackBar('Error loading ' + error.message, true);
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
      this.openSnackBar('Successfully Attraction load');
      return new LoadAttractionById({attraction: attractionLoad});
    }),
    catchError((e) => {
      this.openSnackBar(`error load ${e.message}`, true);
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
          this.openSnackBar(`create position `);
          return new AddAttraction({attraction: loadAttraction});
        }),
        catchError((e) => {
          this.openSnackBar(`Error create position ${e.message}`, true);
          console.log(e);
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
              this.openSnackBar(`Successfully update position`);
              return new UpdateAttraction({
                attraction: {
                  id: object.id,
                  changes: object
                }
              });
            }),
            catchError((e) => {
              this.openSnackBar(`Error update position ${e.message}`, true);
              return EMPTY;
            })
          )
      )
    );

/*
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
          map(() => {
            this.openSnackBar(`Successfully delete position`);
            return new DeleteAttraction({id: index});
          }),
          catchError((e) => {
            this.openSnackBar(`Error delete position ${e.message}`, true);
            return EMPTY;
          })
        )
    )
  );
*/

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
            this.openSnackBar(`Successfully delete positions`);
            return new DeleteAttractions({ ids: index });
          }),
          catchError((e) => {
            this.openSnackBar(`Error delete positions ${e.message}`, true);
            return EMPTY;
          })
        )
    )
  );
}
