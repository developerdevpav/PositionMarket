import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiTagLoadAll} from '../../store/actions/tag.actions';
import {selectTagsByLanguage} from '../../store/selectors/tag.selectors';
import {ApiTypeLoadAll} from '../../store/actions/type.actions';
import {selectTypesByLanguage} from '../../store/selectors/type.selectors';
import {selectPositionByLanguageForCatalog} from '../../store/selectors/position.selectors';
import {ApiAttractionLoadAll} from '../../store/actions/attraction.actions';
import {ApiTypeServiceLoadAll} from '../../store/actions/type-service.actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  deployPositionDictionary: Map<string, string> = new Map();

  positions = [];

  dropdownSelectTag: { id: any, title: string }[] = [];
  dropdownSelectType: { id: any, title: string }[] = [];

  dropdownAllTag: { id: any, title: string }[] = [];
  dropdownAllType: { id: any, title: string }[] = [];

  settingsTag = {
    text: 'Теги аттракциона',
    selectAllText: 'Выделить все',
    unSelectAllText: 'Снять',
    enableSearchFilter: false,
    singleSelection: true,
    labelKey: 'title'
  };

  settingsType = {
    text: 'Типы аттракциона',
    selectAllText: 'Выделить все',
    unSelectAllText: 'Снять',
    enableSearchFilter: false,
    singleSelection: true,
    labelKey: 'title'
  };

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(new ApiTagLoadAll());
    this.store.dispatch(new ApiTypeLoadAll());
    this.store.dispatch(new ApiTypeServiceLoadAll());
    this.store.dispatch(new ApiAttractionLoadAll());

    this.store.select(selectTagsByLanguage).subscribe(it => {
      this.dropdownAllTag = it;
    });

    this.store.select(selectTypesByLanguage).subscribe(it => {
      this.dropdownAllType = it;
    });

    this.store.select(selectPositionByLanguageForCatalog).subscribe(it => {
      this.positions = it;
      console.log(this.positions);
    });
  }

  deployItem(id: string) {
    const foundId = this.deployPositionDictionary.get(id);
    if ( foundId ) {
      this.deployPositionDictionary.delete(id);
    } else {
      this.deployPositionDictionary.set(id, id);
    }
  }

  idDeployItem(id: string) {
    return this.deployPositionDictionary.get(id);
  }

  next(position: any) {
    let indexImage = position.images.indexOf(position.image);

    if ( indexImage < 0 || ( (indexImage + 1) === position.images.length) ) {
      return;
    }

    position.image = position.images[++indexImage];
  }

  prev(position: any) {
    let indexImage = position.images.indexOf(position.image);

    if ( indexImage < 0 || ( indexImage === 0 ) ) {
      return;
    }

    position.image = position.images[--indexImage];
  }

}
