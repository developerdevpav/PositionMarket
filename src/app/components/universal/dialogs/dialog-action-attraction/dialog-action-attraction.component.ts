import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {MemoizedSelector, MemoizedSelectorWithProps, Store} from '@ngrx/store';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {ApiTagLoadAll} from '../../../../store/actions/tag.actions';
import {ApiTypeLoadAll} from '../../../../store/actions/type.actions';
import {DialogSelectionNsiComponent} from '../dialog-selection-nsi/dialog-selection-nsi.component';
import {selectTypesByIds, selectTypesByLanguage} from '../../../../store/selectors/type.selectors';
import {selectTagsByIds, selectTagsByLanguage} from '../../../../store/selectors/tag.selectors';
import {ApiAttractionCreate, ApiAttractionLoadById} from '../../../../store/actions/attraction.actions';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {selectPositionById} from '../../../../store/selectors/position.selectors';
import {Value} from '../../../../store/models/abstract.model';
import {Language} from '../../../../store/models/language.model';
import {TranslateService} from '@ngx-translate/core';
import {Product} from '../../../../store/models/products';
import {
  selectTypeServiceById,
  selectTypeServiceByLanguageAndByLanguage,
  selectTypeServicesByLanguage
} from '../../../../store/selectors/type-service.selectors';
import {ApiTypeServiceLoadAll} from '../../../../store/actions/type-service.actions';
import {ApiImageService} from '../../../../store/services/api-image.service';
import {HttpEventType} from '@angular/common/http';
import {ImageModel} from '../../../../store/models/image.model';
import {PositionImageModel} from '../../../../store/models/position.image.model';
import {TypeService} from '../../../../store/models/type-service.model';

@Component({
  selector: 'app-dialog-action-attraction',
  templateUrl: './dialog-action-attraction.component.html',
  styleUrls: ['./dialog-action-attraction.component.scss']
})
export class DialogActionAttractionComponent implements OnInit, OnDestroy {

  images: PositionImageModel[] = [];

  selectedImages: ImageModel[] = [];

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
    id: null,
    products: [],
    images: [],
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

  constructor(public imageService: ApiImageService, public dialog: MatDialog, public store: Store<any>,
              public dialogRef: MatDialogRef<DialogActionAttractionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string },
              translate: TranslateService) {

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

  private selectNsiByIds(select: MemoizedSelectorWithProps<object, string[], {id: string, title: string}[]>, uuid: string[]) {
    this.store.select(select, uuid).subscribe(list => {
      console.log(list);
    });
  }

  ngOnInit() {
    this.store.dispatch(new ApiTypeLoadAll());
    this.store.dispatch(new ApiTagLoadAll());
    this.store.dispatch(new ApiTypeServiceLoadAll());

    this.types$ = this.store.select(selectTypesByLanguage);
    this.tags$ = this.store.select(selectTagsByLanguage);

    this.loadAllTypeService(list => {
      this.dropdownAllTypeService = list;
      this.selectedProduct = this.dropdownAllTypeService.length;
    });

    this.calculateProduct();

    if (this.data.action !== 'create' && this.data.id !== undefined) {
      this.store.dispatch(new ApiAttractionLoadById(this.data.id));

      this.store.select(selectPositionById, {id: this.data.id}).subscribe(position => {
        this.position = position;

        this.selectedTypes$ = this.store.select(selectTypesByIds, this.position.types);
        this.selectedTags$ = this.store.select(selectTagsByIds, this.position.tags);

        if (this.position.products && this.position.products.length !== 0) {
          this.position.products
            .filter(product => product.service)
            .forEach((it, ind) => {
              let value: {id: string, title: string};
              this.store.select(selectTypeServiceByLanguageAndByLanguage, {id: it.service})
                .subscribe(typeService => value = typeService);
              console.log(value);
              this.selectProducts.push({index: ind, product: it, service: [value]});
            });
        }

        if (this.position.images && this.position.images.length !== 0) {
          this.position.images.forEach(imageModel => {
            this.images.push(
              {
                id: null,
                position: null,
                url: imageModel.url,
                image: imageModel.id,
                mainImage: false
              }
            );
          });
        }

        this.defaultSetMainImage();
        this.setValueLanguageFromPositionTitle();
      });
    }
  }

  loadAllTypeService(seccLoad: (list) => void) {
    this.typesService$ = this.store.select(selectTypeServicesByLanguage);
    let tmpStore;
    this.typesService$.subscribe(list => {
      tmpStore = list;
    });

    seccLoad(tmpStore);
  }


  buildPosition() {
    this.updateOrPushValueInTitle(this.titleRu);
    this.updateOrPushValueInTitle(this.titleEn);

    this.position.products = [];

    console.log(this.position);
    this.position.tags = this.dropdownSelectTag
      .map(tag => tag.id);

    this.position.types = this.dropdownSelectType
      .map(type => type.id);

    console.log(this.selectProducts);
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

    console.log(this.images.filter(image => image && image.image && image.url));
    this.position.images = this.images.filter(image => image && image.image && image.url);

    this.store.dispatch(new ApiAttractionCreate(this.position));

  }

  updateOrPushValueInTitle(field: Value) {
    console.log(field);
    if (field && field.value && field.value !== '') {
      const valueLanguage = this.position.title.find(it => it.language === field.language);
      if (valueLanguage) {
        valueLanguage.value = field.value;
        console.log('Значение на было перезаписывается');
        console.log(field);
      } else {
        this.position.title.push(field);
        console.log('Значение на было создаётся');
        console.log(field);
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
    return (lengthSelected < this.selectedProduct) && this.selectedProduct !== 0;
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

  changeInput($event) {
    const fileList: FileList = $event.target.files;
    this.isActiveLoading = true;
    if (fileList && fileList.length > 0) {
      this.imageService.uploadImages(fileList).subscribe(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress: {
            this.currentValueProgressLoading = (100 / event.total) * event.loaded;
            break;
          }
          case HttpEventType.Response: {
            this.isActiveLoading = false;
            const selectedImage: ImageModel[] = JSON.parse(event.body);
            if (selectedImage && selectedImage.length > 0) {
              selectedImage.forEach(imageModel => {
                this.images.push(
                  {
                    id: null,
                    position: null,
                    url: imageModel.url,
                    image: imageModel.id,
                    mainImage: false
                  }
                );
              });
              this.defaultSetMainImage();
            }
            break;
          }
        }
      });
    }
  }

  defaultSetMainImage() {
    if (this.images && this.images.length > 0) {
      if (!this.images.find(image => image.mainImage)) {
        this.images[0].mainImage = true;
      }
    }
  }

  selectMainImage(it: PositionImageModel) {
    if (this.images && this.images.length > 0) {

      this.images.forEach(image => {
        image.mainImage = false;
        if (image.image === it.image) {
          image.mainImage = true;
        }
      });
    }
  }
}
