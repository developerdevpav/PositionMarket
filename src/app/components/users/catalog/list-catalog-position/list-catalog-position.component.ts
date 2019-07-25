import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {getPositionCatalog} from '../../../../store/selectors/position.selectors';
import {select, Store} from '@ngrx/store';
import {ImageUI} from '../../../../ui/models';
import {ApiAttractionLoadAll} from '../../../../store/actions/attraction.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TypeServiceEnum} from '../../../../store/models/type-service';
import {EnumColumnProductTable, ProductRow, TableSetting} from '../../table-service-position/table-service-position.component';
import {catalogItemTableSetting} from '../../table-service-position/table.setting';
import {DeleteProduct, SetProduct, SetProducts} from '../../../../store/actions/select-product.actions';
import {ProductSelect} from '../../../../store/reducers/selected-product.reducer';


export interface PositionCatalog {
  id: string | number;
  images: ImageUI[]
  title: string;
  description: string;
  minPrice: number | undefined;
  products: ProductRow[],
  selectedProduct: ProductRow[]
}

export interface StatePanel {
  state: string;
  isExpansion: boolean;
}

const enum ExpansionPanelState {
  EXPANSION = 'expansion', HIDDEN = 'hidden'
}

@Component({
  selector: 'app-list-catalog-position',
  templateUrl: './list-catalog-position.component.html',
  styleUrls: ['./list-catalog-position.component.scss'],
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
export class ListCatalogPositionComponent implements OnInit, OnDestroy, AfterViewInit {

  statePanels: Map<string | number, StatePanel> = new Map();

  subscriber: Subscription = new Subscription();

  positions: Observable<PositionCatalog[]>;

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

  selectedService: ProductRow[] = [];

  productRowClickByRow: ProductRow;

  constructor(private store: Store<any>) {
    this.store.dispatch(new ApiAttractionLoadAll());
  }

  ngOnInit() {
    this.positions = this.store.pipe(select(getPositionCatalog));

    const subscriberPosition = this.positions.subscribe(it => {
      it.filter(position => this.statePanels.get(position.id) == null)
        .forEach(position => {
        this.statePanels.set(position.id, {
          state: 'hidden',
          isExpansion: false
        });
      });
    });

    this.subscriber.add(subscriberPosition);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngAfterViewInit(): void {}

  expansionPanel(id: string | number) {
    const currentState = this.statePanels.get(id);

    this.productRowClickByRow = undefined;

    if (currentState) {

      currentState.isExpansion = !currentState.isExpansion;
      currentState.state = currentState.isExpansion
        ? 'expansion'
        : 'hidden';
    }
  }

  selectedServiceAction($event: ProductRow[], idAttraction: string | number) {
    if ( $event && $event.length > 0 ) {
      const array = $event.map(row => {
        return {
          id: row.id,
          attractionId: idAttraction
        } as ProductSelect;
      });

      this.store.dispatch(new SetProducts(array));
    }
  }

  onMouseClickByProductRow($event: ProductRow, id: string | number) {
    this.productRowClickByRow = $event;
  }

  onSelectProductRow($event: ProductRow, idAttraction: string | number) {
    if ($event) {
      const value = {
        id: $event.id,
        attractionId: idAttraction
      } as ProductSelect;
      this.store.dispatch(new SetProduct(value));
    }
  }

  eventUnSelectRow($event: ProductRow, id: string | number) {
    this.store.dispatch(new DeleteProduct($event.id));
  }
}

