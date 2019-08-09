import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadRequestPositions} from '../position/position.actions';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NsiAbstractService} from '../services/nsi.abstract.service';
import {ProductTypeEntity} from '../entities/product.type.entity';
import {LoadRequestProductType, LoadSuccessProductType, ProductTypeActionTypes} from './product.type.actions';

@Injectable()
export class ProductTypeEffects {


  constructor(private actions$: Actions,
              private service: NsiAbstractService<ProductTypeEntity>) {}


  @Effect()
  loadProductTypesEffect$ = this.actions$.pipe(
    ofType<LoadRequestProductType>(
      ProductTypeActionTypes.LOAD_REQUEST
    ),
    startWith(new LoadRequestPositions()),
    switchMap(() => this.service.getAll('product-types')
      .pipe(
        map(
          (positions: ProductTypeEntity[]) =>
            new LoadSuccessProductType(positions)
        ),
        catchError(error =>
          Observable.create(new LoadSuccessProductType(error))
        )
      )
    )
  );
}
