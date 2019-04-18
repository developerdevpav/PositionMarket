import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiTagLoadAll} from '../../store/actions/tag.actions';
import {selectTagsByLanguage} from '../../store/selectors/tag.selectors';
import {ApiTypeLoadAll} from '../../store/actions/type.actions';
import {selectTypesByLanguage} from '../../store/selectors/type.selectors';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  dropdownSelectTag: { id: any, title: string }[] = [];
  dropdownSelectType: { id: any, title: string }[] = [];

  dropdownAllTag: { id: any, title: string }[] = [];
  dropdownAllType: { id: any, title: string }[] = [];

  settingsTag = {
    text: 'Теги аттракциона',
    selectAllText: 'Выделить все',
    unSelectAllText: 'Снять',
    enableSearchFilter: true,
    singleSelection: true,
    labelKey: 'title'
  };

  settingsType = {
    text: 'Типы аттракциона',
    selectAllText: 'Выделить все',
    unSelectAllText: 'Снять',
    enableSearchFilter: true,
    singleSelection: true,
    labelKey: 'title'
  };

  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.store.dispatch(new ApiTagLoadAll());
    this.store.dispatch(new ApiTypeLoadAll());

    this.store.select(selectTagsByLanguage).subscribe(it => {
      this.dropdownAllTag = it;
    });

    this.store.select(selectTypesByLanguage).subscribe(it => {
      this.dropdownAllType = it;
    });
  }

  createItemProduct() {

  }
}
