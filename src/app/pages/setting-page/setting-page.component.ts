import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadRequestProductType} from '../../store/product-type/product.type.actions';
import * as positionStore from '../../store/position/position.selector';
import * as productTypeStore from '../../store/product-type/product.type.selectors';
import * as typeStore from '../../store/type/type.selectors';
import * as tag from '../../store/tag/tag.selectors';
import {PositionEntity} from '../../store/entities/position.entity';
import {ProductTypeEntity} from '../../store/entities/product.type.entity';
import {LoadRequestPositions} from '../../store/position/position.actions';
import {TypeEntity} from '../../store/entities/type.entity';
import {LoadRequestType} from '../../store/type/type.actions';
import {LoadRequestTag} from '../../store/tag/tag.actions';

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

  types: TypeEntity[] = [];
  loadingType = false;

  tags: TypeEntity[] = [];
  loadingTag = false;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select(productTypeStore.selectProductTypes).subscribe(positions => this.productTypes = positions);
    this.store.select(positionStore.selectPositions).subscribe(positions => this.positions = positions);
    this.store.select(typeStore.selectTypes).subscribe(types => this.types = types);
    this.store.select(tag.selectTags).subscribe(tags => this.tags = tags);

    this.store.select(tag.selectIsLoading).subscribe(isLoading => this.loadingTag = isLoading);
    this.store.select(typeStore.selectIsLoading).subscribe(isLoading => this.loadingType = isLoading);
    this.store.select(productTypeStore.selectIsLoading).subscribe(isLoading => this.loadingProductType = isLoading);
    this.store.select(positionStore.selectIsLoading).subscribe(isLoading => this.loadingPosition = isLoading);

    this.store.dispatch(new LoadRequestTag());
    this.store.dispatch(new LoadRequestType());
    this.store.dispatch(new LoadRequestPositions());
    this.store.dispatch(new LoadRequestProductType());
  }

}
