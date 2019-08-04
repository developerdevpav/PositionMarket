import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ImageUI} from '../../../../ui/models';
import {Row} from '../../table-service-position/table-service-position.component';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {getSelectProduct} from '../../../../store/selectors/position.selectors';
import {ProductServiceExpansionProps} from '../product-service-expansion/product-service-expansion.component';
import {ProductSelect} from '../../../../store/reducers/selected-product.reducer';
import {DeleteProducts, SetProducts} from '../../../../store/actions/select-product.actions';
import {TypeServiceEnum} from '../../../../store/models/type-service';

export interface PositionCatalog {
  id: string | number;
  images: ImageUI[];
  title: string;
  description: string;
  rent: KitProduct;
  delivery: KitProduct;
  personal: KitProduct;
}

export interface KitProduct {
  minPrice?: number;
  products?: Row[];
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

  isSelectedPosition: boolean = false;

  propsRent: ProductServiceExpansionProps = {
    idPosition: '',
    propsRefPanel: {
      titleRef: 'Услуги и цены аренды',
      idPanelRef: TypeServiceEnum.RENT.toString()
    },
    rows: [],
    selectedRows: []
  };

/*
  propsDelivery: ProductServiceExpansionProps = {
    idPosition: '',
    propsRefPanel: {
      titleRef: 'Услуги и цены доставки',
      idPanelRef: TypeServiceEnum.DELIVERY.toString()
    },
    rows: [],
    selectedRows: []
  };

  propsPersonal: ProductServiceExpansionProps = {
    idPosition: '',
    propsRefPanel: {
      titleRef: 'Услуги и цены персонала',
      idPanelRef: TypeServiceEnum.PERSONAL.toString()
    },
    rows: [],
    selectedRows: []
  };
*/

  rentProducts: ProductSelect[];
/*  deliveryProducts: ProductSelect[];
  personalProducts: ProductSelect[];*/

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.propsRent.idPosition = this.position.id as string;
    const selectedProductSubscriber = this.store.select(getSelectProduct, this.position.rent.products).subscribe(array => {
        this.propsRent.selectedRows = array;
        if (array && array.length > 0) {
          this.isSelectedPosition = true;
        }
        this.propsRent.rows = this.position.rent.products;
      });

    this.subscriber.add(selectedProductSubscriber);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  getPropsRent(title: string, id: string): ProductServiceExpansionProps {
    this.propsRent.propsRefPanel = {
      idPanelRef: id,
      titleRef: title
    };
    return this.propsRent;
  }

  eventBtnShoppingCart() {
    if ( this.isSelectedPosition ) {
      this.deleteFromCart();
    } else {
      this.toCart();
    }
  }

  toCart() {
    if (this.rentProducts) {
      this.store.dispatch(new SetProducts(this.rentProducts));
      this.isSelectedPosition = true;
    }
  }

  deleteFromCart() {
    if (this.rentProducts) {
      this.store.dispatch(new DeleteProducts(this.rentProducts.map(it => it.id)));
      this.isSelectedPosition = false;
    }
  }

  selectProductsRent($event: ProductSelect[]) {
    this.rentProducts = $event;
  }

  getCurrentIconShoppingCart(): string {
    return this.isSelectedPosition ? 'check' : 'shop-cart';
  }

  getCurrentTitleShoppingCart(): string {
    return (this.isSelectedPosition ? 'DELETE_FROM_CART' : 'ADD_TO_CART');
  }
}
