import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable, pipe} from 'rxjs';
import {NsiUI} from '../../../../ui/models';
import {ApiTagLoadAll} from '../../../../store/actions/tag.actions';
import {ApiTypeLoadAll} from '../../../../store/actions/type.actions';
import {DialogSelectionNsiComponent} from '../dialog-selection-nsi/dialog-selection-nsi.component';
import {selectTypesAreNonIds, selectTypesByIds, selectTypesByLanguage} from '../../../../store/selectors/type.selectors';
import {selectTagsAreNonIds, selectTagsByIds, selectTagsByLanguage} from '../../../../store/selectors/tag.selectors';
import {ApiAttractionLoadById, LoadAttractionById} from '../../../../store/actions/attraction.actions';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {selectPositionById} from '../../../../store/selectors/position.selectors';
import {Value} from '../../../../store/models/abstract.model';
import {Language} from '../../../../store/models/language.model';
import {Product} from '../../../../store/models/products';

@Component({
  selector: 'app-dialog-action-attraction',
  templateUrl: './dialog-action-attraction.component.html',
  styleUrls: ['./dialog-action-attraction.component.scss']
})
export class DialogActionAttractionComponent implements OnInit, OnDestroy {

  titleRu: Value = {language: Language.RU, value: ''};
  titleEn: Value = {language: Language.EN, value: ''};

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

  selectedTags$: Observable<{ id: string, title: string }[]> ;
  selectedTypes$: Observable<{ id: string, title: string }[]>;

  tags$: Observable<{ id: string, title: string }[]>;
  types$: Observable<{ id: string, title: string }[]>;

  constructor(public dialog: MatDialog, public store: Store<any>,
              public dialogRef: MatDialogRef<DialogActionAttractionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string }) {
  }

  openDialog(observable: Observable<{ id: string, title: string }[]>, selectValues: Observable<{ id: string, title: string }[]>): void {
    const dialogRef = this.dialog.open(DialogSelectionNsiComponent, {
      hasBackdrop: true,
      width: '70%',
      height: 'auto',
      data: {list: observable, selected: selectValues}
    });

    dialogRef.afterClosed();
  }

  ngOnInit() {
    this.store.dispatch(new ApiTypeLoadAll());
    this.store.dispatch(new ApiTagLoadAll());

    this.types$ = this.store.select(selectTypesByLanguage);
    this.tags$ = this.store.select(selectTagsByLanguage);

    this.selectedTypes$ = this.store.select(selectTypesByIds, []);
    this.selectedTags$ = this.store.select(selectTagsByIds, []);

    if (this.data.action !== 'create' && this.data.id !== undefined) {
      this.store.dispatch(new ApiAttractionLoadById(this.data.id));

      this.store.select(selectPositionById, {id: this.data.id}).subscribe(position => {
        this.position = position;
        console.log(`Load ${this.position}`);
        this.setValueLanguageFromPositionTitle();
        if (this.position && this.position.types && this.position.types.length > 0) {
          this.selectedTypes$ = this.store.select(selectTypesByIds, this.position.types);
          this.types$ = this.store.select(selectTypesAreNonIds, this.position.types);
        }
        if (this.position && this.position.tags && this.position.tags.length > 0) {
          this.selectedTags$ = this.store.select(selectTagsByIds, this.position.tags);
          this.tags$ = this.store.select(selectTagsAreNonIds, this.position.tags);
        }
      });
    }
  }
  
  buildPosition() {
    this.updateOrPushValueInTitle(this.titleRu);
    this.updateOrPushValueInTitle(this.titleEn);

    this.selectedTypes$.subscribe(list => {
      this.position.types = list.filter(it => it.id !== undefined)
        .map(it => it.id);
    });

    this.selectedTags$.subscribe(list => {
      this.position.tags = list.filter(it => it.id !== undefined)
        .map(it => it.id);
    });
  }

  updateOrPushValueInTitle(value: Value) {
    if (value && value.value && value.value !== '') {
      const valueLanguage = this.position.title.find(it => it.language === value.language);
      console.log(valueLanguage);
      if (valueLanguage && valueLanguage.value !== value.value) {
        valueLanguage.value = value.value;
      } else if (valueLanguage.value !== value.value) {
        this.position.title.push(value);
        console.log('create new Value');
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

  ngOnDestroy(): void {
    this.selectedTags$ = null;
    this.selectedTypes$ = null;
    this.position = null;
    console.log('ngOnDestroy');
  }
}
