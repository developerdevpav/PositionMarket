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

  @Output()
  item = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.list$ = this.list$.sort((master, other) => master.order > other.order ? 1 : -1);
    console.log(this.list$);
    this.list$
      .filter(it => it !== null && it.service !== null && it.service.type !== null)
      .forEach(it => {
        if ( this.map.has(it.service.type) ) {
          this.map.get(it.service.type).push(it);
          console.log('this.map.has(it.service.type): ' + it.service.type);
        } else {
          const array = [];
          array.push(it);
          console.log('!this.map.has(it.service.type): ' + it.service.type);
          this.map.set(it.service.type, array);
        }
      });
    console.log(this.map);
  }


  addService(service: { id: string; price: number; service: { id: string; title: string } }) {
    this.list$.forEach(it => {

    });
  }

  getKey(map: Map<string, ProductService>) {
    return Array.from(map.keys());
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
    description: string
  };
  enable: boolean;
}
