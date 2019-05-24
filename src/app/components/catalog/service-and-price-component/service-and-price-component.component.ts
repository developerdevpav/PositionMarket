import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectProductFromAttraction} from '../../../store/selectors/position.selectors';
import {DeleteProduct, SetProduct} from '../../../store/actions/select-product.actions';
import {getTotalPriceByAttractionId} from '../../../store/selectors/selected.product.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-service-and-price-component',
  templateUrl: './service-and-price-component.component.html',
  styleUrls: ['./service-and-price-component.component.scss']
})
export class ServiceAndPriceComponentComponent implements OnInit {

  @Input()
  list$: { id: string, attraction: string }[] = [];
  products: {
    id: string,
    price: number,
    order: number,
    attraction: string,
    selected: boolean,
    service: {
      id: string,
      title: string,
      type: string,
      description: string
    }
  }[] = [];

  map: Map<string, ProductService[]> = new Map();

  total: Observable<number>;

  @Output()
  item = new EventEmitter();

  constructor(private repository: Store<any>) {

  }

  ngOnInit() {
    this.total = this.repository.select(getTotalPriceByAttractionId, this.list$[0].attraction);
    this.repository.select(selectProductFromAttraction, this.list$).subscribe(it => {
      this.products = it;

    });
    this.products
      .filter(it => it !== null && it.service !== null && it.service.type !== null)
      .forEach(it => {
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

  switchActionService(nameGroup: string, group: ProductService[], item: any, event: any) {
    switch (nameGroup) {
      case 'RENT': {
        if (event.checked) {
          group.forEach(it => {
            it.selected = false;
            this.repository.dispatch(new DeleteProduct(it.id));
          });
          this.repository.dispatch(new SetProduct(item));
        }
        break;
      }
      case 'PERSONAL': {
        if (event.checked) {
          group.forEach(it => {
            it.selected = false;
            this.repository.dispatch(new DeleteProduct(it.id));
          });
          this.repository.dispatch(new SetProduct(item));
        }
        break;
      }
      case 'DELIVERY': {
        if (event.checked) {
          group.forEach(it => {
            it.selected = false;
            this.repository.dispatch(new DeleteProduct(it.id));
          });
          this.repository.dispatch(new SetProduct(item));
        }
        break;
      }
    }

    if (!event.checked) {
      this.repository.dispatch(new DeleteProduct(item.id));
    }
    item.selected = event.checked;
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
