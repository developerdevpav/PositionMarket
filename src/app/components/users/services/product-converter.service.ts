import {Injectable} from '@angular/core';
import {EntityTypeServiceEnumToProduct} from '../../../store/models/catalog-entities';
import {Store} from '@ngrx/store';
import {ApiAttractionLoadById} from '../../../store/actions/attraction.actions';
import {selectProductsFromAttractionByType} from '../../../store/selectors/position.selectors';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductConverterService {

  constructor(private store: Store<any>) {

  }

  public getProducts(idAttraction: any) {
    this.store.dispatch(new ApiAttractionLoadById(idAttraction));

    return this.store.select(selectProductsFromAttractionByType, {id: idAttraction}).pipe(
      map(it => {
        return it.map(value => {
           return {
             type: value.type,
             values: value.values
           } as EntityTypeServiceEnumToProduct
        })
      })
    )
  }

}
