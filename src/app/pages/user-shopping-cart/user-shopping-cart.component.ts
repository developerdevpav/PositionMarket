import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PositionCatalog} from '../../components/users/catalog/item-catalog-position/item-catalog-position.component';

@Component({
  selector: 'app-user-shopping-cart',
  templateUrl: './user-shopping-cart.component.html',
  styleUrls: ['./user-shopping-cart.component.scss']
})
export class UserShoppingCartComponent implements OnInit {

  positionCatalog: PositionCatalog = {
    id: 'fwjfiewjfiewfwe',
    products: [],
    images: [],
    description: 'jfuewufhweifokwoqfkpeoqkwfopejqiohpreqhgurqhoxcmferfurevwhirehw',
    minPrice: 256,
    title: 'New position'
  };

  constructor(private store: Store<any>) { }

  ngOnInit() {

  }

}
