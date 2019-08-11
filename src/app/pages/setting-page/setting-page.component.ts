import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadRequestProductType} from '../../store/product-type/product.type.actions';
import * as positionStore from '../../store/position/position.selector';
import * as productTypeStore from '../../store/product-type/product.type.selectors';
import * as typeStore from '../../store/type/type.selectors';
import {PositionEntity} from '../../store/entities/position.entity';
import {ProductTypeEntity} from '../../store/entities/product.type.entity';
import {LoadRequestPositions} from '../../store/position/position.actions';
import {TypeEntity} from '../../store/entities/type.entity';
import {LoadRequestType} from '../../store/type/type.actions';
import {CreateTag, LoadTags} from '../../store/tag/tag.actions';
import * as tagSelector from '../../store/tag/tag.selectors';
import {FormControl, FormGroup} from '@angular/forms';
import {Value} from '../../store/entities/abstract.entity';
import {Language} from '../../store/language/language.model';
import {TagEntity} from '../../store/entities/tag.entity';

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

  tagValue: Value[];

  buyTicketForm: FormGroup;

  constructor(private store: Store<any>) {
    this.buyTicketForm = new FormGroup({
      ru_value: new FormControl(null),
      en_value: new FormControl(null)
    });
  }


  ngOnInit() {
    this.store.select(productTypeStore.selectProductTypes).subscribe(positions => this.productTypes = positions);
    this.store.select(positionStore.selectPositions).subscribe(positions => this.positions = positions);
    this.store.select(typeStore.selectTypes).subscribe(types => this.types = types);

    this.store.select(tagSelector.selectTags).subscribe(tags => this.tags = tags);
    this.store.select(tagSelector.selectIsLoading).subscribe(isLoading => this.loadingType = isLoading);

    this.store.select(typeStore.selectIsLoading).subscribe(isLoading => this.loadingType = isLoading);
    this.store.select(productTypeStore.selectIsLoading).subscribe(isLoading => this.loadingProductType = isLoading);
    this.store.select(positionStore.selectIsLoading).subscribe(isLoading => this.loadingPosition = isLoading);

    this.store.dispatch(new LoadTags());
    this.store.dispatch(new LoadRequestType());
    this.store.dispatch(new LoadRequestPositions());
    this.store.dispatch(new LoadRequestProductType());
  }

  submitTagForm() {

    const valueRu: Value = {
      value: this.buyTicketForm.get('ru_value').value,
      language: Language.RU
    };

    const valueEn: Value = {
      value: this.buyTicketForm.get('en_value').value,
      language: Language.EN
    };


    const tagEntity: TagEntity = {
      id: null,
      values: [valueRu, valueEn]
    };

    this.store.dispatch(new CreateTag({tag: tagEntity}));
  }

  changeValues($event: Value[]) {
    this.tagValue = $event;
  }

  addTag() {
    const tagEntity: TagEntity = {
      id: null,
      values: this.tagValue
    };

    this.store.dispatch(new CreateTag({tag: tagEntity}));
  }

  addType() {
    const tagEntity: TypeEntity = {
      id: null,
      values: this.tagValue
    };

    this.store.dispatch(new CreateTag({tag: tagEntity}));
  }
}
