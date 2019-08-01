import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  EnumColumnProductTable,
  EnumPlaceTable,
  EnumTypeActionBtn,
  ProductRow,
  TableSetting
} from '../../table-service-position/table-service-position.component';

@Component({
  selector: 'product-catalog-panel-service',
  templateUrl: './product-catalog-panel-service.component.html',
  styleUrls: ['./product-catalog-panel-service.component.scss']
})
export class ProductCatalogPanelServiceComponent implements OnInit {

  isLockData = false;

  @Input() products: ProductRow[] = [];
  selectedProducts: ProductRow[] = [];


  @Input()
  set select(products: ProductRow[]) {
    if (products && products.length > 0) {
      this.selectedProducts = products;
      this.setting.typeActionBtn = EnumTypeActionBtn.WARN;
      this.setting.titleActionBtn = 'DELETE_FROM_CART';
      this.isLockData = true;
    }
  }

  @Output() clickByRow: EventEmitter<ProductRow> = new EventEmitter();
  @Output() selected: EventEmitter<ProductRow[]> = new EventEmitter();
  @Output() deleted: EventEmitter<ProductRow[]> = new EventEmitter();

  columns: EnumColumnProductTable[] = Array(
    EnumColumnProductTable.TITLE,
    EnumColumnProductTable.TYPE,
    EnumColumnProductTable.PRICE,
    EnumColumnProductTable.DESCRIPTION,
    EnumColumnProductTable.CHECK
  );
  
  setting: TableSetting = {
    titleActionBtn: 'ADD_TO_CART',
    typeActionBtn: EnumTypeActionBtn.PRIMARY,
    hiddenActionBtn: true,
    place: EnumPlaceTable.CATALOG
  };
  
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit ProductCatalogPanelServiceComponent');
    console.log(this.setting);
  }

  onClickByProduct($event: ProductRow) {
    this.clickByRow.emit($event);
  }

  selectedServiceAction($event: ProductRow[]) {
    this.isLockData = !this.isLockData;
    this.setting.typeActionBtn = this.isLockData ? EnumTypeActionBtn.WARN : EnumTypeActionBtn.PRIMARY;
    this.setting.titleActionBtn = this.isLockData ? 'DELETE_FROM_CART' : 'ADD_TO_CART';

    if (this.isLockData) {
      this.selected.emit($event);
    } else {
      this.deleted.emit(this.products);
    }
  }
}
