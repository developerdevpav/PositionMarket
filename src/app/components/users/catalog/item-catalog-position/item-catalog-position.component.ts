import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ImageUI} from '../../../../ui/models';
import {ProductRow} from '../../table-service-position/table-service-position.component';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {getDescriptionProductById, getSelectProduct} from '../../../../store/selectors/position.selectors';
import {DeleteProducts, SetProducts} from '../../../../store/actions/select-product.actions';
import {ProductSelect} from '../../../../store/reducers/selected-product.reducer';


export interface PositionCatalog {
  id: string | number;
  images: ImageUI[];
  title: string;
  description: string;
  minPrice: number | undefined;
  products: ProductRow[];
}

export const enum ExpansionPanelState {
  EXPANSION = 'expansion', HIDDEN = 'hidden'
}

@Component({
  selector: 'item-catalog-position',
  templateUrl: './item-catalog-position.component.html',
  styleUrls: ['./item-catalog-position.component.scss'],
  animations: [
    trigger('expansionTrigger', [
      state(ExpansionPanelState.HIDDEN.toString(), style({
        height: 0
      })),
      state(ExpansionPanelState.EXPANSION.toString(), style({
        height: '*'
      })),
      transition('hidden <=> expansion', animate('0.2s'))
    ])
  ]
})
export class ItemCatalogPositionComponent implements OnInit, OnDestroy {

  @Input()
  position: PositionCatalog;

  subscriberDescriptionProduct: Subscription = new Subscription();

  subscriber: Subscription = new Subscription();
  selectedProduct: ProductRow[];

  productInformation: ProductRow;
  productDescription: string;

  state: ExpansionPanelState = ExpansionPanelState.HIDDEN;
  isExpansion = false;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    const selectedProductSubscriber = this.store.select(getSelectProduct, this.position.products).subscribe(array => {
      this.selectedProduct = array;
    });
    this.subscriber.add(selectedProductSubscriber);
  }

  selectedServiceAction($event: ProductRow[]) {
    console.log($event);
    this.store.dispatch(new SetProducts($event.map(it => {
      return {
        attractionId: this.position.id,
        id: it.id
      } as ProductSelect;
    })));
  }

  expansionPanel() {
    this.isExpansion = !this.isExpansion;
    this.state = this.isExpansion ? ExpansionPanelState.EXPANSION : ExpansionPanelState.HIDDEN;
  }

  onClickByProduct($event: ProductRow) {
    this.productInformation = $event;
    this.subscriberDescriptionProduct.add(
      this.store.select(getDescriptionProductById, {positionId: this.position.id, productId: $event.id})
        .subscribe(it => {
          this.productDescription = it;
        })
    );
  }

  hiddenSupportInfoPanel() {
    this.productInformation = undefined;
    this.productDescription = '';
    this.subscriberDescriptionProduct.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscriberDescriptionProduct.unsubscribe();
    this.subscriber.unsubscribe();
  }

  deleteFromCart($event: ProductRow[]) {
    this.store.dispatch(new DeleteProducts($event.map(it => it.id)));
  }
}
