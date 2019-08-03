import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ImageUI} from '../../../../ui/models';
import {Row} from '../../table-service-position/table-service-position.component';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {getSelectProduct} from '../../../../store/selectors/position.selectors';
import {ProductServiceExpansionProps} from '../product-service-expansion/product-service-expansion.component';
import {ProductSelect} from '../../../../store/reducers/selected-product.reducer';
import {SetProducts} from '../../../../store/actions/select-product.actions';

export interface PositionCatalog {
  id: string | number;
  images: ImageUI[];
  title: string;
  description: string;
  minPrice: number | undefined;
  products: Row[];
}

@Component({
  selector: 'item-catalog-position',
  templateUrl: './item-catalog-position.component.html',
  styleUrls: ['./item-catalog-position.component.scss']
})
export class ItemCatalogPositionComponent implements OnInit, OnDestroy {

  @Input()
  position: PositionCatalog;

  totalPrice: number = 0;

  subscriber: Subscription = new Subscription();

  propsRent: ProductServiceExpansionProps = {
    idPosition: '',
    propsRefPanel: {
      titleRef: 'Посмотреть цены аренды позиции',
      idPanelRef: 'RENT'
    },
    rows: [],
    selectedRows: []
  };

  rentProducts: ProductSelect[] = [];

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.propsRent.idPosition = this.position.id as string;
    const selectedProductSubscriber = this.store.select(getSelectProduct, this.position.products).subscribe(array => {
      this.propsRent.selectedRows = array;
      this.propsRent.rows = this.position.products;
      this.totalPrice = this.propsRent.selectedRows.reduce((val, val2) => val += val2.price, 0);
    });
    this.subscriber.add(selectedProductSubscriber);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  selectProductsRent($event: ProductSelect[]) {
    this.rentProducts = $event;
  }

  getTotalPrice() {
    if (!this.rentProducts) {
      return 0;
    }
    return this.rentProducts.length;
  }

  toCart() {
    this.store.dispatch(new SetProducts(this.rentProducts));
  }

  isExistProducts(): boolean {
    return this.rentProducts && this.rentProducts.length > 0;
  }
}
