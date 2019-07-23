import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectSelectedProducts} from '../../store/selectors/selected.product.selectors';
import {Observable, Subscription} from 'rxjs';
import {SelectProduct} from '../../store/actions/select-product.actions';
import {PositionByLanguageForCatalog} from "../../ui/models";
import {selectPositionByLanguageForCatalog} from "../../store/selectors/position.selectors";

@Component({
  selector: 'app-user-shopping-cart',
  templateUrl: './user-shopping-cart.component.html',
  styleUrls: ['./user-shopping-cart.component.scss']
})
export class UserShoppingCartComponent implements OnInit {

  positions: Observable<PositionByLanguageForCatalog[]> = this.store.select(selectPositionByLanguageForCatalog);

  private subscriber: Subscription = new Subscription();

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new SelectProduct());
    this.store.select(selectSelectedProducts);
    this.subscriber.add(this.positions.subscribe());
  }

}
