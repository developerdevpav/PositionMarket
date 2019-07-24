import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {selectPositionByLanguageForCatalog} from '../../../../store/selectors/position.selectors';
import {Store} from '@ngrx/store';
import {PositionByLanguageForCatalog} from '../../../../ui/models';
import {ApiAttractionLoadAll} from '../../../../store/actions/attraction.actions';
import {DevpavProductTypeServiceOutputProps} from '../devpav-product-type-service/devpav-product-type-service.component';
import {DeleteProduct, SetProduct} from '../../../../store/actions/select-product.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TypeServiceEnum} from '../../../../store/models/type-service';
import {
  EnumColumnProductTable,
  ProductRow,
  TableSetting
} from '../../table-service-position/table-service-position.component';
import {catalogItemTableSetting} from '../../table-service-position/table.setting';

@Component({
  selector: 'app-list-catalog-position',
  templateUrl: './list-catalog-position.component.html',
  styleUrls: ['./list-catalog-position.component.scss'],
  animations: [
    trigger('expansionTrigger', [
      state(ExpansionPanelState.HIDDEN.toString(), style({
        height: 0,
        opacity: 0.1
      })),
      state(ExpansionPanelState.EXPANSION.toString(), style({
        height: '*',
        opacity: 1
      })),
      transition('hidden <=> expansion', animate('0.3s'))
    ])
  ]
})
export class ListCatalogPositionComponent implements OnInit, OnDestroy {

  expansion = false;

  statePanels: Map<string, StatePanel> = new Map();

  subscriber: Subscription = new Subscription();

  positions: Observable<PositionByLanguageForCatalog[]> = this.store.select(selectPositionByLanguageForCatalog);

  constructor(private store: Store<any>) {
    this.store.dispatch(new ApiAttractionLoadAll());
  }

  columns: EnumColumnProductTable[] = Array(
    EnumColumnProductTable.TITLE,
    EnumColumnProductTable.TYPE,
    EnumColumnProductTable.PRICE,
    EnumColumnProductTable.CHECK
  );

  setting: TableSetting = catalogItemTableSetting;

  transactions: ProductRow[] = [
    {id: '', price: 432, title: 'Доставка', type: TypeServiceEnum.DELIVERY},
    {id: '', price: 543, title: 'Самовывоз', type: TypeServiceEnum.DELIVERY},
    {id: '', price: 45, title: 'Аренда на сутки', type: TypeServiceEnum.RENT},
    {id: '', price: 432, title: 'Аренда на час', type: TypeServiceEnum.RENT},
    {id: '', price: 43233, title: 'Монтажники', type: TypeServiceEnum.PERSONAL}
  ];

  ngOnInit() {
    const subscriberPosition = this.positions.subscribe(positions => {
      positions.filter(position => !this.statePanels.has(position.id))
        .forEach(position => {
          this.statePanels.set(position.id, {
            id: position.id,
            isExpansion: false,
            state: 'hidden'
          });
        });
    });
    this.subscriber.add(subscriberPosition);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  expansionPanel(id: string) {
    const currentState = this.statePanels.get(id);

    if (currentState) {
      currentState.isExpansion = !currentState.isExpansion;
      currentState.state = currentState.isExpansion
        ? 'expansion'
        : 'hidden';
    }

    console.log(this.statePanels);
  }

  getState(id: string) {
    return this.statePanels.get(id).state;
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

export interface ProductPrice {
  id: string;
  type: TypeServiceEnum;
  title: string;
  price: number;
}

export interface StatePanel {
  id: string;
  state: string;
  isExpansion: boolean;
}

const enum ExpansionPanelState {
  EXPANSION = 'expansion', HIDDEN = 'hidden'
}
