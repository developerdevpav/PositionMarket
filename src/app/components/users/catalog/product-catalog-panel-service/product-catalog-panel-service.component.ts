import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  EnumColumnProductTable,
  Row,
  TableServicePositionProps,
  TableSetting
} from '../../table-service-position/table-service-position.component';

@Component({
  selector: 'product-catalog-panel-service',
  templateUrl: './product-catalog-panel-service.component.html',
  styleUrls: ['./product-catalog-panel-service.component.scss']
})
export class ProductCatalogPanelServiceComponent implements OnInit {

  propsTable: TableServicePositionProps = {
    id: '',
    data: [],
    selectData: []
  };

  @Input()
  idPosition: string = '';

  setting: TableSetting = {
    disabledRow: false,
    hiddenFooter: false,
    hiddenHeader: false
  };

  @Input()
  set products (rows: Row[]) {
    this.propsTable.data = rows;
  }

  @Input()
  set selectProducts(products: Row[]) {
    if (products && products.length > 0) {
      this.propsTable.selectData = [];
      this.setting.disabledRow = true;
    }
  }

  @Output()
  clickDescription: EventEmitter<Row> = new EventEmitter();

  @Output()
  selectedItems: EventEmitter<Row[]> = new EventEmitter();

  @Output()
  selected: EventEmitter<Row[]> = new EventEmitter();

  @Output()
  deleted: EventEmitter<Row[]> = new EventEmitter();

  columns: EnumColumnProductTable[] = Array(
    EnumColumnProductTable.TITLE,
    EnumColumnProductTable.TYPE,
    EnumColumnProductTable.PRICE,
    EnumColumnProductTable.DESCRIPTION,
    EnumColumnProductTable.CHECK
  );

  
  constructor() { }

  ngOnInit() {
    this.propsTable.id = this.idPosition;
  }

  clickByDescription($event: Row) {
    this.clickDescription.emit($event);
  }

  items($event: Row[]) {
    this.selectedItems.emit($event);
  }
}
