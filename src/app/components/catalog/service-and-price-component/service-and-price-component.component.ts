import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-service-and-price-component',
  templateUrl: './service-and-price-component.component.html',
  styleUrls: ['./service-and-price-component.component.scss']
})
export class ServiceAndPriceComponentComponent implements OnInit {

  @Input()
  list$: ProductService[] = [];

  map: Map<string, ProductService[]> = new Map();

  private selectedProductService: Map<string, ProductService> = new Map();

  totalPrice = 0;

  @Output()
  item = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.list$ = this.list$.sort((master, other) => master.order > other.order ? 1 : -1);
    this.list$
      .filter(it => it !== null && it.service !== null && it.service.type !== null)
      .forEach(it => {
        it.selected = false;
        if (this.map.has(it.service.type)) {
          this.map.get(it.service.type).push(it);
        } else {
          const array = [];
          array.push(it);
          this.map.set(it.service.type, array);
        }
      });
  }

  getKey(map: Map<string, ProductService>) {
    return Array.from(map.keys());
  }

  switchActionService(nameGroup: string, group: ProductService[], item: ProductService, event: any) {
    switch (nameGroup) {
      case 'RENT': {
        if (event.checked) {
          group.forEach(it => {
            it.selected = false;
          });
        }

        break;
      }
      case 'PERSONAL': {
        if (event.checked) {
          group.forEach(it => {
            it.selected = false;
          });
        }
        break;
      }
      case 'DELIVERY': {
        if (event.checked) {
          group.forEach(it => {
            it.selected = false;
          });
        }
        break;
      }
    }

    item.selected = event.checked;
    this.totalPrice = 0;
    this.list$.forEach((value) => {
      if (value.selected) {
        this.totalPrice += value.price;
      }
    });

    console.log(this.selectedProductService);
    console.log();
  }

  isSelectRent(object: any) {
    return this.list$.find(it => it.selected && it.service.type === 'RENT') !== null && object !== 'RENT';
  }
}

interface ProductService {
  id: string;
  price: number;
  order: number;
  service: {
    id: string;
    title: string;
    type: string;
    description: string;
  };
  selected: boolean;
}
