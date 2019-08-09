import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadRequestProductType} from '../../store/product-type/product.type.actions';
import * as positionStore from '../../store/position/position.selector';
import * as productTypeStore from '../../store/product-type/product.type.selectors';
import {PositionEntity} from '../../store/entities/position.entity';
import {ProductTypeEntity} from '../../store/entities/product.type.entity';
import {LoadRequestPositions} from '../../store/position/position.actions';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {

  positions: PositionEntity[] = [];
  loadingPosition = false;

  productTypes: ProductTypeEntity[] = [];
  loadingProductType = false;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select(positionStore.selectIsLoading).subscribe(isLoading => {
      this.loadingPosition = isLoading;
    });

    this.store.select(positionStore.selectPositions).subscribe(positions => {
      this.positions = positions;
    });

    this.store.select(productTypeStore.selectIsLoading).subscribe(isLoading => {
      this.loadingProductType = isLoading;
    });

    this.store.select(productTypeStore.selectProductTypes).subscribe(positions => {
      this.productTypes = positions;
    });

    this.store.dispatch(new LoadRequestPositions());
    this.store.dispatch(new LoadRequestProductType());
  }

}
