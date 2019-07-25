import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {getPositionCatalog} from '../../../../store/selectors/position.selectors';
import {select, Store} from '@ngrx/store';
import {ImageUI} from '../../../../ui/models';
import {ApiAttractionLoadAll} from '../../../../store/actions/attraction.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {
  EnumColumnProductTable,
  EnumTypeActionBtn,
  ProductRow,
  TableSetting
} from '../../table-service-position/table-service-position.component';
import {catalogItemTableSetting} from '../../table-service-position/table.setting';
import {DeleteProducts, SetProducts} from '../../../../store/actions/select-product.actions';
import {ProductSelect} from '../../../../store/reducers/selected-product.reducer';
import {SelectionModel} from '@angular/cdk/collections';


export interface PositionCatalog {
  id: string | number;
  images: ImageUI[];
  title: string;
  description: string;
  minPrice: number | undefined;
  products: ProductRow[];
}

export interface StatePanel {
  state: string;
  isExpansion: boolean;
  selectedProduct: SelectionModel<ProductRow>;
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

  productRowClickByRow: ProductRow;

  constructor(private store: Store<any>) {
    this.store.dispatch(new ApiAttractionLoadAll());
  }

  ngOnInit() {
    this.positions = this.store.pipe(select(getPositionCatalog));

    this.positions.subscribe(console.log);
    const subscriberPosition = this.positions.subscribe(positionStore => {
        positionStore
          .filter(position => this.statePanels.get(position.id) == null)
          .forEach(position => {
            this.statePanels.set(position.id, {
              state: 'hidden',
              isExpansion: false,
              selectedProduct: new SelectionModel<ProductRow>(true, [])
            });
          });
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('');
      }
    );

    this.subscriber.add(subscriberPosition);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngAfterViewInit(): void {
  }

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
    if (!$event || $event.length === 0) {
      return;
    }

    switch (this.setting.typeActionBtn) {
      case EnumTypeActionBtn.PRIMARY: this.addProductsToStore($event, idAttraction); break;
      case EnumTypeActionBtn.WARN: this.deleteProductsFromStore($event); break;
    }
  }

  deleteProductsFromStore(products: ProductRow[]) {
    this.store.dispatch(new DeleteProducts(products.map(it => it.id)));
  }

  addProductsToStore(products: ProductRow[], id: string | number) {
    const array = products.map(row => {
      return {
        id: row.id,
        attractionId: id
      } as ProductSelect;
    });

    this.store.dispatch(new SetProducts(array));
  }

  onMouseClickByProductRow($event: ProductRow, id: string | number) {
    this.productRowClickByRow = $event;
  }

  onSelectProductRow($event: ProductRow, id: string | number) {
    if ($event) {
      this.statePanels.get(id).selectedProduct.select($event);
    }
  }

  eventUnSelectRow($event: ProductRow, id: string | number) {
    this.statePanels.get(id).selectedProduct.select($event);
  }
}

export enum StateTitleBtn {
  DELETE = 'DELETE_FROM_CART',
  ADD = 'ADD_TO_CART'
}

