import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NsiApi} from '../services/nsi.api';
import {ProductTypeEntity} from '../entities/product.type.entity';
import {ProductTypeActions} from './product.type.actions';
import * as productTypeAction from '../product-type/product.type.actions';

@Injectable()
export class ProductTypeEffects {

  constructor(private actions$: Actions, private api: NsiApi<ProductTypeEntity>) { }

  @Effect()
  loadProductTypesEffect$ = this.actions$.pipe(
    ofType<productTypeAction.LoadProductTypes>(ProductTypeActions.LOAD_PRODUCT_TYPES),
    startWith(new productTypeAction.LoadProductTypes()),
    switchMap(() => this.api.getAll('product-types')
      .pipe(
        map((values: ProductTypeEntity[]) => new productTypeAction.LoadProductTypesSuccess({ productTypes: values })),
        catchError(error =>
          Observable.create(new productTypeAction.RequestTypeFailure(error))
        )
      )
    )
  );

  @Effect()
  public create = this.actions$.pipe(
    ofType<productTypeAction.CreateProductType>(ProductTypeActions.CREATE_PRODUCT_TYPE),
    map(it => it.payload),
    switchMap((payload: { productType: ProductTypeEntity }) => this.api.create('product-types', payload.productType)
      .pipe(
        map((object: ProductTypeEntity) => new productTypeAction.CreateProductTypeSuccess({ productType: object })),
        catchError(err => Observable.create(new productTypeAction.RequestTypeFailure(err)))
      )
    )
  );

  @Effect()
  public update = this.actions$.pipe(
    ofType<productTypeAction.UpdateProductType>(ProductTypeActions.UPDATE_PRODUCT_TYPE),
    map(it => it.payload),
    switchMap((payload: { productType: ProductTypeEntity }) => this.api.update('product-types', payload.productType)
      .pipe(
        map((object: ProductTypeEntity) => new productTypeAction.UpdateProductTypeSuccess({ productType: object })),
        catchError(err => Observable.create(new productTypeAction.RequestTypeFailure(err)))
      )
    )
  );

  @Effect()
  public deleteArray = this.actions$.pipe(
    ofType<productTypeAction.DeleteProductTypes>(ProductTypeActions.DELETE_PRODUCT_TYPES),
    map(it => it.payload),
    switchMap((payload: { ids: string[] }) => this.api.deleteAll('product-types', payload.ids)
      .pipe(
        map(() => new productTypeAction.DeleteProductTypesSuccess({ ids: payload.ids })),
        catchError(err => Observable.create(new productTypeAction.RequestTypeFailure(err)))
      )
    )
  );

}
