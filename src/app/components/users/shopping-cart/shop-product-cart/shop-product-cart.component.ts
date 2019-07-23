import {Component, OnInit} from '@angular/core';
import {TypeServiceEnum} from '../../../../store/models/type-service';

export interface ProductPrice {
  id: string;
  type: TypeServiceEnum;
  title: string;
  price: number;
}


@Component({
  selector: 'shop-product-cart',
  templateUrl: './shop-product-cart.component.html',
  styleUrls: ['./shop-product-cart.component.scss']
})
export class ShopProductCartComponent implements OnInit {

  displayedColumns: string[] = ['title', 'price', 'type', 'select'];

  transactions: ProductPrice[] = [
    {id: '', price: 432, title: 'Доставка', type: TypeServiceEnum.DELIVERY},
    {id: '', price: 543, title: 'Самовывоз', type: TypeServiceEnum.DELIVERY},
    {id: '', price: 45, title: 'Аренда на сутки', type: TypeServiceEnum.RENT},
    {id: '', price: 432, title: 'Аренда на час', type: TypeServiceEnum.RENT},
    {id: '', price: 43233, title: 'Монтажники', type: TypeServiceEnum.PERSONAL}
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit(): void {
  }
}



