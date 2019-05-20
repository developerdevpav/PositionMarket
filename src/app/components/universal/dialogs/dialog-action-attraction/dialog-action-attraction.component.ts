import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable, Subscription} from 'rxjs';
import {ApiTagLoadAll} from '../../../../store/actions/tag.actions';
import {ApiTypeLoadAll} from '../../../../store/actions/type.actions';
import {selectTypesByIds, selectTypesByLanguage} from '../../../../store/selectors/type.selectors';
import {selectTagsByIds, selectTagsByLanguage} from '../../../../store/selectors/tag.selectors';
import {ApiAttractionLoadById} from '../../../../store/actions/attraction.actions';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {selectPositionById} from '../../../../store/selectors/position.selectors';
import {Value} from '../../../../store/models/abstract.model';
import {Language} from '../../../../store/models/language.model';
import {TranslateService} from '@ngx-translate/core';
import {Product} from '../../../../store/models/products';
import {selectTypeServiceByLanguageAndByIds, selectTypeServicesByLanguage} from '../../../../store/selectors/type-service.selectors';
import {ApiTypeServiceLoadAll} from '../../../../store/actions/type-service.actions';
import {ImageModel} from '../../../../store/models/image.model';
import {PositionImageModel} from '../../../../store/models/position.image.model';
import {ImageUtilService} from '../../../../store/services/utils/image-util.service';
import {TranslatorYandexService} from '../../../../store/services/translator-yandex.service';

@Component({
  selector: 'app-dialog-action-attraction',
  templateUrl: './dialog-action-attraction.component.html',
  styleUrls: ['./dialog-action-attraction.component.scss']
})
export class DialogActionAttractionComponent implements OnInit, OnDestroy {

  images: PositionImageModel[] = [];
  subscriptionNsi: Subscription = new Subscription();

  selectedImages: ImageModel[] = [];

  loadedDropdownTag = false;
  loadedDropdownType = false;

  currentValueProgressLoading = 0;
  isActiveLoading = false;

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

  descriptionRu: Value = {language: Language.RU, value: ''};
  descriptionEn: Value = {language: Language.EN, value: ''};

  dropdownSelectTag: { id: any, title: string }[] = [];
  dropdownSelectType: { id: any, title: string }[] = [];

  dropdownAllTag: { id: any, title: string }[] = [];
  dropdownAllType: { id: any, title: string }[] = [];

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
    id: null,
    products: [],
    images: [],
    tags: [],
    title: [],
    description: [],
    types: []
  };

  @Input() public id;

  selectedTags$: Observable<{ id: string, title: string }[]>;
  selectedTypes$: Observable<{ id: string, title: string }[]>;
  typesService$: Observable<{ id: string, title: string }[]>;

  constructor(public dialog: MatDialog, public store: Store<any>,
              public dialogRef: MatDialogRef<DialogActionAttractionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string },
              translate: TranslateService,
              public imageUtil: ImageUtilService,
              public translatorYandex: TranslatorYandexService) {
    this.subscriptionNsi.add(
      translate.get('SELECT_ALL').subscribe(value => {
        this.settings.selectAllText = value;
        this.settingsSingleSelect.selectAllText = value;
      })
    );

    this.subscriptionNsi.add(
      translate.get('UN_SELECT_ALL').subscribe(value => {
        this.settings.unSelectAllText = value;
        this.settingsSingleSelect.unSelectAllText = value;
      })
    );
    this.subscriptionNsi.add(
      translate.get('INPUT_SELECT_TAG_INPUT').subscribe(value => {
        this.settings.text = value;
        this.settingsSingleSelect.text = value;
      })
    );

    this.subscriptionNsi.add(
      translate.get('INPUT_SELECT_TYPES_INPUT').subscribe(value => {
        this.settings.text = value;
        this.settingsSingleSelect.text = value;
      })
    );

  }

  ngOnInit() {
    if (this.data.action === 'create') {
      this.loadedDropdownTag = true;
      this.loadedDropdownType = true;
    }
    this.updateDataThisDialog();
  }

  loadAllTypeService(seccLoad: (list) => void) {
    this.typesService$ = this.store.select(selectTypeServicesByLanguage);
    this.subscriptionNsi.add(this.typesService$.subscribe(it => seccLoad(it)));
  }

  updateDataThisDialog() {

    this.store.dispatch(new ApiTypeLoadAll());
    this.store.dispatch(new ApiTagLoadAll());
    this.store.dispatch(new ApiTypeServiceLoadAll());

    this.subscriptionNsi.add(
      this.store.select(selectTypesByLanguage).subscribe(list => {
        this.dropdownAllType = list;
      })
    );

    this.subscriptionNsi.add(
      this.store.select(selectTagsByLanguage).subscribe(list => {
        this.dropdownAllTag = list;
      })
    );

    this.loadAllTypeService(list => {
        this.dropdownAllTypeService = list;
        this.selectedProduct = this.dropdownAllTypeService.length;
      }
    );

    if (this.data.action !== 'create' && this.data.id !== undefined) {
      this.store.dispatch(new ApiAttractionLoadById(this.data.id));

      const subscribePosition = this.store.select(selectPositionById, {id: this.data.id})
        .subscribe(position => {
          this.position = position;

          this.selectedTypes$ = this.store.select(selectTypesByIds, this.position.types);
          this.selectedTags$ = this.store.select(selectTagsByIds, this.position.tags);

          this.subscriptionNsi.add(
            this.selectedTypes$.subscribe(list => {
              if (list) {
                this.dropdownSelectType = list.filter(it => it);
                this.loadedDropdownType = true;
              }
            })
          );

          this.subscriptionNsi.add(
            this.selectedTags$.subscribe(list => {
              if (list) {
                this.dropdownSelectTag = list
                  .filter(tag => tag != null)
                  .filter(tag => tag.id !== null && tag.title);
                this.loadedDropdownTag = true;
              }
            })
          );

          if (this.position.products && this.position.products.length !== 0) {

            const ids: string[] = this.position.products
              .filter(product => product.service)
              .map((it, ind) => {
                this.selectProducts.push({index: ind, product: it, service: []});
                return it.service;
              });

            this.store.select(selectTypeServiceByLanguageAndByIds, ids)
              .subscribe(list => {
                if (list && list.length > 0) {
                  this.selectProducts
                    .filter(it => it && it.product && it.product.service)
                    .forEach(it => {
                      const foundService = list
                        .filter(typeService => typeService && typeService.id)
                        .find(typeService => typeService.id === it.product.service);
                      if (foundService && it.service.length === 0) {
                        // it.service = it.service.filter(service => service.id && service.title);
                        if (it.service) {
                          it.service.push(foundService);
                        }
                      }
                    });
                }
              });
          }

          this.calculateProduct();

          if (this.position.images && this.position.images.length !== 0) {
            this.images = this.position.images;
            console.log(this.images);
          }

          this.setValueLanguageFromPositionTitle();
          this.setValueLanguageFromPositionDescription();
        });

      this.subscriptionNsi.add(subscribePosition);
    }
  }

  buildPosition() {
    this.updateOrPushValueInTitle(this.titleRu);
    this.updateOrPushValueInTitle(this.titleEn);

    this.updateOrPushValueInDescription(this.descriptionRu);
    this.updateOrPushValueInDescription(this.descriptionEn);

    this.position.products = [];

    this.position.tags = this.dropdownSelectTag
      .map(tag => tag.id);

    this.position.types = this.dropdownSelectType
      .map(type => type.id);

    this.selectProducts.map(product => {
      if (product.service && product.service.length > 0) {
        const service = product.service[0];
        if (service && product.product && service.id) {
          product.product.service = service.id;
          if (!this.position.products) {
            this.position.products = [];
          }
          this.position.products.push(product.product);
        }
      }
    });

    this.position.images = this.images.filter(image => image && image.image && image.url);

    if (this.data.action !== 'view') {
      console.log(this.position);
     /* this.store.dispatch(
        this.data.action === 'create'
          ? new ApiAttractionCreate(this.position)
          : new ApiAttractionUpdate(this.position)
      );
      // this.resetVariables();
      this.dialogRef.close();*/
    }
  }

  updateOrPushValueInTitle(field: Value) {
    if (field && field.value && field.value !== '') {
      const valueLanguage = this.position.title.find(it => it.language === field.language);
      if (valueLanguage) {
        valueLanguage.value = field.value;
      } else {
        this.position.title.push(field);
      }
    }
  }

  updateOrPushValueInDescription(field: Value) {
    if (field && field.value && field.value !== '') {
      const valueLanguage = this.position.description.find(it => it.language === field.language);
      if (valueLanguage) {
        valueLanguage.value = field.value;
      } else {
        this.position.description.push(field);
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

  setValueLanguageFromPositionDescription() {
    let value = this.position.description.find(it => it.language === Language.RU);
    if (value) {
      this.descriptionRu.value = value.value;
    }
    value = this.position.description.find(it => it.language === Language.EN);
    if (value) {
      this.descriptionEn.value = value.value;
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy dialog');
    this.subscriptionNsi.unsubscribe();
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
    return (this.selectProducts.length < this.selectedProduct) && this.selectedProduct !== 0;
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

  changeInput($event) {
    const fileList: FileList = $event.target.files;
    this.isActiveLoading = true;
    if (fileList && fileList.length > 0) {
      const subscriberUploadImages = this.imageUtil.uploadImages(fileList,
        percent => {
          this.currentValueProgressLoading = percent;
        }, imagePositionList => {
          imagePositionList.forEach(image => {
            this.images.push(image);
          });
          this.imageUtil.setMainImage(this.images, null);
        }
      );
      this.subscriptionNsi.add(subscriberUploadImages);
    }
  }

  selectMainImage(it: string) {
    this.images = this.imageUtil.setMainImage(this.images, it);
  }

}
