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
import {Product} from '../../../../store/models/products';
import {selectTypeServiceById, selectTypeServicesByLanguage} from '../../../../store/selectors/type-service.selectors';
import {ApiTypeServiceLoadAll} from '../../../../store/actions/type-service.actions';

@Component({
  selector: 'app-dialog-action-attraction',
  templateUrl: './dialog-action-attraction.component.html',
  styleUrls: ['./dialog-action-attraction.component.scss']
})
export class DialogActionAttractionComponent implements OnInit, OnDestroy {

  selectedProduct = 0;
  selectProducts: {
    index: number,
    product: Product,
    service: {
      id: string,
      title: string
    }[]
  }[] = [];

  titleRu: Value = {language: Language.RU, value: ''};
  titleEn: Value = {language: Language.EN, value: ''};

  dropdownSelectTag: { id: any, title: string }[] = [];
  dropdownSelectType: { id: any, title: string }[] = [];

  dropdownAllTag: { id: any, title: string }[] = [];
  dropdownAllType: { id: any, title: string }[] = [];

  dropdownSelectTypeService: { id: any, title: string }[] = [];
  dropdownAllTypeService: { id: any, title: string }[] = [];

  settings = {
    text: '',
    selectAllText: '',
    unSelectAllText: '',
    enableSearchFilter: true,
    singleSelection: false,
    labelKey: 'title'
  };

  settingsSingleSelect = {
    text: '',
    selectAllText: '',
    unSelectAllText: '',
    enableSearchFilter: true,
    singleSelection: true,
    labelKey: 'title'
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
  typesService$: Observable<{ id: string, title: string }[]> = Observable.create();

  constructor(public dialog: MatDialog, public store: Store<any>,
              public dialogRef: MatDialogRef<DialogActionAttractionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string },
              translate: TranslateService) {

    this.store.dispatch(new ApiTypeLoadAll());
    this.store.dispatch(new ApiTagLoadAll());
    this.store.dispatch(new ApiTypeServiceLoadAll());

    translate.get('SELECT_ALL').subscribe(value => {
      this.settings.selectAllText = value;
      this.settingsSingleSelect.selectAllText = value;
    });
    translate.get('UN_SELECT_ALL').subscribe(value => {
      this.settings.unSelectAllText = value;
      this.settingsSingleSelect.unSelectAllText = value;
    });

    translate.get('INPUT_SELECT_TAG_INPUT').subscribe(value => {
      this.settings.text = value;
      this.settingsSingleSelect.text = value;
    });
    translate.get('INPUT_SELECT_TYPES_INPUT').subscribe(value => {
      this.settings.text = value;
      this.settingsSingleSelect.text = value;
    });
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
    this.loadAllTypeService(list => {
      this.dropdownAllTypeService = list;
      this.selectedProduct = this.dropdownAllTypeService.length;
    });

    this.calculateProduct();

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

    if (this.data.action !== 'create' && this.data.id !== undefined) {
      this.store.dispatch(new ApiAttractionLoadById(this.data.id));

      this.store.select(selectPositionById, {id: this.data.id}).subscribe(position => {
        this.position = position;
        this.selectedTypes$ = this.store.select(selectTypesByIds, this.position.types);
        this.selectedTags$ = this.store.select(selectTagsByIds, this.position.tags);

        if (this.position.products && this.position.products.length !== 0) {
          this.position.products.forEach((it, ind) => {
            this.selectProducts.push({index: ind, product: it, service: [this.getTypeServiceById(it.service)]});
          });
        }

        this.setValueLanguageFromPositionTitle();
      });
    }
  }

  loadAllTypeService(seccLoad: (list) => void) {
    this.typesService$ = this.store.select(selectTypeServicesByLanguage);

    this.typesService$.subscribe(list => {
      seccLoad(list);
    });

  }

  getTypeServiceById(uuid: string): { id: string, title: string } {
    if (!uuid) {
      return {id: null, title: ''};
    }

    let value: { id: null, title: '' };
    this.store.select(selectTypeServiceById, {id: uuid}).subscribe(typeService => {
        value = typeService;
      }
    );
    return value;
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
    if (value) {
      this.titleRu.value = value.value;
    }
    value = this.position.title.find(it => it.language === Language.EN);
    if (value) {
      this.titleEn.value = value.value;
    }
  }

  ngOnDestroy(): void {
  }

  deleteProduct(index: number, service: { id: string, title: string }) {
    if (service && service.id !== '') {
      this.dropdownAllTypeService.push(service);
    }

    this.removeById(this.selectProducts, element => element.index === index);

    if (this.selectProducts && this.selectProducts.length === 0) {
      this.calculateProduct();
    }
  }

  conditionBlockButtonItem(): boolean {
    const length = this.dropdownAllTypeService.length;
    const lengthSelected = this.selectProducts.length;
    return  (lengthSelected < this.selectedProduct) && this.selectedProduct !== 0;
  }

  createItemProduct() {
    if (!this.conditionBlockButtonItem()) {
      // TODO: @Author devpav will change when exists message service
      return;
    }

    let resultIndex = 0;

    if (this.selectProducts && this.selectProducts.length !== 0) {
      this.selectProducts.sort((a, b) => a.index > b.index ? 1 : a.index === b.index ? 0 : -1);
      resultIndex = (this.selectProducts[0].index ? this.selectProducts[0].index : 0) + 1;
    }

    console.log(resultIndex);

    const object = {index: resultIndex, product: {id: null, price: 0, service: ''}, service: []};
    this.selectProducts.push(object);
    this.calculateProduct();
  }

  removeById(array, functionFind: (element) => boolean) {
    const index1 = array.findIndex(functionFind);
    if (index1 >= 0) {
      array.splice(index1, 1);
    }
    return array;
  }

  selectProductAction($event: any, services: { id: string, title: string }[]) {
    this.calculateProduct();
  }

  calculateProduct() {
    this.store.dispatch(new ApiTypeServiceLoadAll());
    this.loadAllTypeService(list => {
      this.dropdownAllTypeService = list;
      if (this.selectProducts) {
        this.selectProducts
          .map(product => product.service)
          .filter(service => service && service.length !== 0)
          .filter(service => service[0].id && service[0].id !== '')
          .map(service => service[0].id)
          .forEach(id => {
            this.removeById(this.dropdownAllTypeService, element => element.id === id);
          });
      }

    });
  }
}
