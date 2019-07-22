import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DevpavProductCardProps} from '../devpav-product-card/devpav-product-card.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-devpav-product-type-service',
  templateUrl: './devpav-product-type-service.component.html',
  styleUrls: ['./devpav-product-type-service.component.scss'],
  animations: [
    trigger('expansionTrigger', [
      state('hidden', style({height: 0})),
      state('expansion', style({height: '*'})),
      transition('hidden <=> expansion', animate('0.1s'))
    ])
  ]
})
export class DevpavProductTypeServiceComponent implements OnInit {

  public stateExpansionPanel = 'hidden';

  isExpansion = false;

  optionType: DevpavProductCardProps;

  servicesOptions: DevpavProductCardProps[] = [];

  @Input()
  set typeService(typeService: DevpavProductTypeServiceInputProps) {
    console.log(typeService);
    this.optionType = {
      icon: 'baseline-expand.svg',
      id: typeService.id,
      price: typeService.price,
      showCheckBox: false,
      title: typeService.title
    };
  }

  @Input()
  set services(services: DevpavProductTypeServiceInputProps[]) {
    console.log(services);
    this.servicesOptions = services.map(service => {
      return {
        icon: undefined,
        id: service.id,
        price: service.price,
        showCheckBox: true,
        title: service.title
      };
    });
  }

  @Output()
  selectedProduct: EventEmitter<DevpavProductTypeServiceOutputProps> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit ');
    console.log(this.optionType);
    console.log(this.servicesOptions);
  }

  expansionPanel() {
    this.isExpansion = !this.isExpansion;
    this.stateExpansionPanel = this.isExpansion ? 'expansion' : 'hidden';
    this.optionType.icon = this.isExpansion ? 'baseline-expand_less.svg' : 'baseline-expand.svg';
  }

  setProduct(idProduct: string, $event: boolean) {
    this.selectedProduct.emit({product: idProduct, checked: $event});
  }

}

export interface DevpavProductTypeServiceOutputProps {
  product: string;
  checked: boolean;
}

export interface DevpavProductTypeServiceInputProps {
  id: string;
  title: string;
  price: number;
}
