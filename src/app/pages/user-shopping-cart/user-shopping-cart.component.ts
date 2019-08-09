import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-user-shopping-cart',
  templateUrl: './user-shopping-cart.component.html',
  styleUrls: ['./user-shopping-cart.component.scss']
})
export class UserShoppingCartComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
