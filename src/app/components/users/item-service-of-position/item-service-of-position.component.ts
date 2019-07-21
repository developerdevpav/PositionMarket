import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductUI} from '../../../ui/models';
import {MatCheckboxChange} from '@angular/material';
import {Store} from '@ngrx/store';
import {selectSelectedProducts} from '../../../store/selectors/selected.product.selectors';

@Component({
  selector: 'app-item-service-of-position',
  templateUrl: './item-service-of-position.component.html',
  styleUrls: ['./item-service-of-position.component.scss']
})
export class ItemServiceOfPositionComponent implements OnInit {

  @Input()
  products: ProductUI[] = [];
  @Input()
  checked: boolean = false;

  @Output()
  selected: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private store: Store<any>) { }

  ngOnInit() {
    console.log('ngOnInit ItemServiceOfPositionComponent');
    this.store.select(selectSelectedProducts);
  }


  setProduct(matCheckboxChange: MatCheckboxChange, it: ProductUI) {
    this.selected.emit(matCheckboxChange.checked);

/*
    const product: SelectedProduct = {
      id: it.id,
      order: it.order,
      attraction: it.attractionId,
      price: it.price,
      service: it.service
    };

    this.checked = matCheckboxChange.checked;

    if (matCheckboxChange.checked) {
      this.store.dispatch(new SetProduct(product));
    } else {
      this.store.dispatch(new DeleteProduct(it.id));
    }
*/
  }
}
