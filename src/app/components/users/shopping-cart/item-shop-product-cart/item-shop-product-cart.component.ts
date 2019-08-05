import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getMapPositions} from '../../../../store/selectors/position.selectors';
import {SelectProducts} from '../../../../store/actions/select-product.actions';

@Component({
  selector: 'app-item-shop-product-cart',
  templateUrl: './item-shop-product-cart.component.html',
  styleUrls: ['./item-shop-product-cart.component.scss']
})
export class ItemShopProductCartComponent implements OnInit {

  count = 1;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    console.log('ngOnInit ItemShopProductCartComponent');
    this.store.dispatch(new SelectProducts());
    this.store.select(getMapPositions).subscribe(value => {
      console.log(value);
    });
  }

  increment() {
    this.count++;
  }

  decrement(): number {
    if (this.count <= 0) {
      return;
    }

    this.count--;
  }
}
