import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {ApiTagLoadAll} from '../../../../store/actions/tag.actions';
import {ApiTypeLoadAll} from '../../../../store/actions/type.actions';
import {DialogSelectionNsiComponent} from '../dialog-selection-nsi/dialog-selection-nsi.component';
import {selectTypesByIds, selectTypesByLanguage} from '../../../../store/selectors/type.selectors';
import {selectTagsByIds, selectTagsByLanguage} from '../../../../store/selectors/tag.selectors';
import {ApiAttractionLoadById} from '../../../../store/actions/attraction.actions';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {selectPositionById} from '../../../../store/selectors/position.selectors';
import {Value} from '../../../../store/models/abstract.model';
import {Language} from '../../../../store/models/language.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-action-attraction',
  templateUrl: './dialog-action-attraction.component.html',
  styleUrls: ['./dialog-action-attraction.component.scss']
})
export class DialogActionAttractionComponent implements OnInit, OnDestroy {

  titleRu: Value = {language: Language.RU, value: ''};
  titleEn: Value = {language: Language.EN, value: ''};

  dropdownSelectTag: {id: any, title: string}[] = [];
  dropdownSelectType: {id: any, title: string}[] = [];

  dropdownAllTag: {id: any, title: string}[] = [];
  dropdownAllType: {id: any, title: string}[] = [];

  settings = {
    text: 'Select Countries',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: 'myclass custom-class'
  };

  position: AttractionModel = {
    id: '',
    image: '',
    link: '',
    products: [],
    tags: [],
    title: [],
    types: []
  };

  @Input() public id;

  selectedTags$: Observable<{ id: string, title: string }[]> = Observable.create();
  selectedTypes$: Observable<{ id: string, title: string }[]> = Observable.create();

  tags$: Observable<{ id: string, title: string }[]> = Observable.create();
  types$: Observable<{ id: string, title: string }[]> = Observable.create();

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'title',
    selectAllText: '',
    unSelectAllText: '',
    allowSearchFilter: true,
    closeDropDownOnSelection: false
  };

  constructor(public dialog: MatDialog, public store: Store<any>,
              public dialogRef: MatDialogRef<DialogActionAttractionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string },
              translate: TranslateService) {
    this.store.dispatch(new ApiTypeLoadAll());
    this.store.dispatch(new ApiTagLoadAll());

    translate.get('SELECT_ALL').subscribe(value => this.dropdownSettings.selectAllText = value);
    translate.get('UN_SELECT_ALL').subscribe(value => this.dropdownSettings.unSelectAllText = value);
  }

  openDialog(observable: Observable<{ id: string, title: string }[]>,
             selectValues: Observable<{ id: string, title: string }[]>): void {
    const dialogRef = this.dialog.open(DialogSelectionNsiComponent, {
      hasBackdrop: true,
      width: '70%',
      height: 'auto',
      data: {list: observable, selected: selectValues}
    });

    dialogRef.afterClosed();
  }

  ngOnInit() {
    this.types$ = this.store.select(selectTypesByLanguage);
    this.tags$ = this.store.select(selectTagsByLanguage);

    if ( this.data.action !== 'create' && this.data.id !== undefined ) {
      this.store.dispatch(new ApiAttractionLoadById(this.data.id));

      this.store.select(selectPositionById, {id: this.data.id}).subscribe(position => {
        this.position = position;
        this.selectedTypes$ = this.store.select(selectTypesByIds, this.position.types);
        this.selectedTags$ = this.store.select(selectTagsByIds, this.position.tags);

        this.setValueLanguageFromPositionTitle();
      });
    }

    this.selectedTags$.subscribe(list => {
      this.dropdownSelectTag = list;
    });

    this.selectedTypes$.subscribe(list => {
      this.dropdownSelectType = list;
    });

    this.types$.subscribe(list => {
      this.dropdownAllType = list;
    });

    this.tags$.subscribe(list => {
      this.dropdownAllTag = list;
    });

  }

  buildPosition() {
    this.updateOrPushValueInTitle(this.titleRu);
    this.updateOrPushValueInTitle(this.titleEn);

    this.position.tags = this.dropdownSelectTag
      .map(tag => tag.id);

    this.position.types = this.dropdownSelectType
      .map(tag => tag.id);
  }

  updateOrPushValueInTitle(value: Value) {
    if (value && value.value && value.value !== '') {
      const valueLanguage = this.position.title.find(it => it.language === value.language);
      if (valueLanguage && valueLanguage.value !== value.value) {
        valueLanguage.value = value.value;
      } else if (valueLanguage.value !== value.value) {
        this.position.title.push(value);
      }
    }
  }


  setValueLanguageFromPositionTitle() {
    let value = this.position.title.find(it => it.language === Language.RU);
    if ( value ) {
      this.titleRu.value = value.value;
    }
    value = this.position.title.find(it => it.language === Language.EN);
    if ( value ) {
      this.titleEn.value = value.value;
    }
  }

  ngOnDestroy(): void {}

}
