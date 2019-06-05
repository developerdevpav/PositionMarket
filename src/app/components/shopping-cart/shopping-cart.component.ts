import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  clickId: string;


  onClickItem(click: string) {
  }

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
