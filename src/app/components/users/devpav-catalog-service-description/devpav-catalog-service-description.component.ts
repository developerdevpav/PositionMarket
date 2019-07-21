import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {EntityTypeServiceEnumToProduct} from '../../../store/models/catalog-entities';
import {TypeServiceEnum} from '../../../store/models/type-service';
import {ExpansionSwitcher, ProductUI} from '../../../ui/models';
import {SetProduct} from '../../../store/actions/select-product.actions';
import {SelectedProduct} from '../../../store/models/products';
import {ProductConverterService} from '../services/product-converter.service';

@Component({
  selector: 'app-devpav-catalog-service-description',
  templateUrl: './devpav-catalog-service-description.component.html',
  styleUrls: ['./devpav-catalog-service-description.component.scss']
})
export class DevpavCatalogServiceDescriptionComponent implements OnInit, OnDestroy {

  @Input()
  idAttraction: string = '';

  private subscription: Subscription = new Subscription();
  entities: EntityTypeServiceEnumToProduct[] = [];

  expansionPanel: Map<TypeServiceEnum, null> = new Map();

  constructor(private store: Store<any>, private converter: ProductConverterService) {
  }

  ngOnInit() {
    this.converter.getProducts(this.idAttraction).subscribe(entities => {
      this.entities = entities;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  opened(value: TypeServiceEnum) {
    return this.expansionPanel.has(value);
  }

  switchExpansion(expansionSwitcher: ExpansionSwitcher) {
    if (expansionSwitcher.value) {
      this.expansionPanel.delete(expansionSwitcher.id);
    } else {
      this.expansionPanel.set(expansionSwitcher.id, null);
    }
  }

  deleteProductFromShoppingCart(it: ProductUI) {
    console.log('Delete: ');
    //console.log(it);
    //this.store.dispatch(new DeleteProduct(it.id));
  }

  addProductToShoppingCart(it: ProductUI) {
    console.log('Added: ');
    console.log(it);

    const obj: SelectedProduct = {
      service: it.service.id,
      price: it.price,
      id: it.id,
      attraction: it.attractionId,
      order: 0
    };

    this.store.dispatch(new SetProduct(obj));
  }
}
