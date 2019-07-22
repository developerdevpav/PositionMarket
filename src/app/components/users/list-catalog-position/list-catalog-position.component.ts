import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {selectPositionByLanguageForCatalog} from '../../../store/selectors/position.selectors';
import {Store} from '@ngrx/store';
import {PositionByLanguageForCatalog} from '../../../ui/models';
import {ApiAttractionLoadAll} from '../../../store/actions/attraction.actions';
import {DevpavProductTypeServiceOutputProps} from '../catalog/devpav-product-type-service/devpav-product-type-service.component';
import {DeleteProduct, SetProduct} from '../../../store/actions/select-product.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-catalog-position',
  templateUrl: './list-catalog-position.component.html',
  styleUrls: ['./list-catalog-position.component.scss'],
  animations: [
    trigger('expansionTrigger', [
      state('hidden', style({height: 0})),
      state('expansion', style({height: '*'})),
      transition('hidden <=> expansion', animate('0.3s'))
    ])
  ]
})
export class ListCatalogPositionComponent implements OnInit, OnDestroy {

  expansion = false;

  subscriber: Subscription = new Subscription();

  positions: Observable<PositionByLanguageForCatalog[]> = this.store.select(selectPositionByLanguageForCatalog);

  constructor(private store: Store<any>) {
    this.store.dispatch(new ApiAttractionLoadAll());
  }

  ngOnInit() {
    this.subscriber.add(this.positions.subscribe());
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  selectProduct(position: PositionByLanguageForCatalog, $event: DevpavProductTypeServiceOutputProps) {
    const product = position.products.find(it => $event.product === it.id);
    if ($event.checked) {
      this.store.dispatch(new SetProduct({
        id: product.id,
        service: product.service.id,
        price: product.price,
        order: product.order,
        attraction: position.id
      }));
    } else {
      this.store.dispatch(new DeleteProduct(product.id));
    }
  }
}


