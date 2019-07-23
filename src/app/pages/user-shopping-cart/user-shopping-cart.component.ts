import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectSelectedProducts} from "../../store/selectors/selected.product.selectors";
import {Observable} from "rxjs";
import {SelectProduct} from "../../store/actions/select-product.actions";

@Component({
  selector: 'app-user-shopping-cart',
  templateUrl: './user-shopping-cart.component.html',
  styleUrls: ['./user-shopping-cart.component.scss']
})
export class UserShoppingCartComponent implements OnInit {

  value: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new SelectProduct());
    this.value = this.store.select(selectSelectedProducts);
  }

}
