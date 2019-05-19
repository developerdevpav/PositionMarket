import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-service-and-price-component',
  templateUrl: './service-and-price-component.component.html',
  styleUrls: ['./service-and-price-component.component.scss']
})
export class ServiceAndPriceComponentComponent implements OnInit {

  @Input()
  list$: {
    id: string,
    price: number,
    service: {
      id: string,
      title: string
    }
  }[] = [];

  @Output()
  item = new EventEmitter();

  constructor() {
    console.log(this.list$);
  }

  ngOnInit() {
  }



}
