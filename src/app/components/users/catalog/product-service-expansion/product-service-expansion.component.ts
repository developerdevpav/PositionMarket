import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import DevpavRefPanelProps, {DevpavRefPanelIcon, DevpavRefPanelStyle} from '../../../common/devpav-ref-panel/devpav-ref-panel.component';
import {DevpavInformationPanelProps} from '../../../common/devpav-information-panel/devpav-information-panel.component';
import {Row} from '../../table-service-position/table-service-position.component';
import {getDescriptionProductById} from '../../../../store/selectors/position.selectors';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Store} from '@ngrx/store';
import {ProductSelect} from '../../../../store/reducers/selected-product.reducer';

export const enum ExpansionPanelState {
  EXPANSION = 'expansion', HIDDEN = 'hidden'
}

export interface ProductServiceExpansionProps {
  selectedRows: Row[];
  rows: Row[];
  idPosition?: string;
  propsRefPanel?: DevpavRefPanelProps;
}

@Component({
  selector: 'app-product-service-expansion',
  templateUrl: './product-service-expansion.component.html',
  styleUrls: ['./product-service-expansion.component.scss'],
  animations: [
    trigger('expansionTrigger', [
      state(ExpansionPanelState.HIDDEN.toString(), style({
        height: 0,
        margin: 0
      })),
      state(ExpansionPanelState.EXPANSION.toString(), style({
        height: '*',
        marginBottom: '5px'
      })),
      transition('hidden <=> expansion', animate('0.1s'))
    ])
  ]
})
export class ProductServiceExpansionComponent implements OnInit, OnDestroy {

  subscriberDescriptionProduct: Subscription = new Subscription();

  informationPanelProps: DevpavInformationPanelProps;

  refPanelRentIcon: DevpavRefPanelIcon = {
    iconSvg: 'baseline-expand.svg',
    iconColor: 'black'
  };

  settingRefPanel: DevpavRefPanelStyle = {
    background: 'white',
    height: '40px'
  };

  @Input()
  public props: ProductServiceExpansionProps;

  @Output()
  public selectedProducts: EventEmitter<ProductSelect[]> = new EventEmitter();

  state: ExpansionPanelState = ExpansionPanelState.HIDDEN;
  isExpansion = false;


  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  hiddenSupportInfoPanel() {
    this.informationPanelProps = undefined;
    this.subscriberDescriptionProduct.unsubscribe();
  }

  rentRefPanelAction() {
    this.expansionPanel();
    this.refPanelRentIcon.iconSvg = this.isExpansion ? 'baseline-expand_less.svg' : 'baseline-expand.svg';
  }

  expansionPanel() {
    this.isExpansion = !this.isExpansion;
    this.state = this.isExpansion ? ExpansionPanelState.EXPANSION : ExpansionPanelState.HIDDEN;
    this.informationPanelProps = undefined;
  }

  onClickByProductDescription($event: Row) {
    this.informationPanelProps = {
      title: $event.title,
      description: ''
    };

    this.subscriberDescriptionProduct.add(
      this.store.select(getDescriptionProductById, {positionId: this.props.idPosition, productId: $event.id})
        .subscribe(des => {
          this.informationPanelProps.description = des;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriberDescriptionProduct.unsubscribe();
  }

  items($event: Row[]) {
    if (!$event) {
      return;
    }
    const value = $event.map(row => {
      return {
        id: row.id,
        positionId: this.props.idPosition
      } as ProductSelect;
    });

    this.selectedProducts.emit(value);
  }
}
