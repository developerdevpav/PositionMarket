import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {TypeServiceEnum} from '../../../store/models/type-service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-table-service-position',
  templateUrl: './table-service-position.component.html',
  styleUrls: ['./table-service-position.component.scss']
})
export class TableServicePositionComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [];

  selection: SelectionModel<ProductRow>;
  dataSource: MatTableDataSource<ProductRow>;

  subscriber: Subscription = new Subscription();

  @Input()
  data: ProductRow[] = [];

  @Input()
  selectData: ProductRow[] = [];

  @Input()
  setting: TableSetting;

  @Output()
  selectItem: EventEmitter<ProductRow> = new EventEmitter();

  @Output()
  unselectItem: EventEmitter<ProductRow> = new EventEmitter();

  @Output()
  clickByRow: EventEmitter<ProductRow> = new EventEmitter();

  @Output()
  clickByActionBtn: EventEmitter<ProductRow[]> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.data == null) {
      this.data = [];
    }

    this.data = this.data.sort((value, anotherValue) => value.type > anotherValue.type ? -1 : 1);

    this.dataSource = new MatTableDataSource<ProductRow>(this.data);
    this.dataSource.sort = this.sort;

    this.selection = new SelectionModel<ProductRow>(true, this.data);
    this.selection.clear();

    this.dataSource.connect().subscribe(d => this.data = d);

    if (this.selectData && this.selectData.length > 0) {
      this.selectData.forEach(value => this.selection.select(value));
    }

    const subscriberOnChangeSelection = this.selection.changed.asObservable().subscribe(it => {
      if (it.added.length !== 0) {
        this.selectItem.emit(it.added[0]);
      }

      if (it.removed.length !== 0) {
        this.unselectItem.emit(it.removed[0]);
      }
    });

    if (this.displayedColumns.length === 0) {
      this.displayedColumns = Object.keys(EnumColumnProductTable)
        .map(value => EnumColumnProductTable[value as any]);
    }

    this.subscriber.add(subscriberOnChangeSelection);
  }

  @Input()
  set columns(columns: EnumColumnProductTable[]) {
    if (columns && columns.length !== 0) {
      this.displayedColumns = (columns && columns.length !== 0)
        ? columns.map(it => it.toString())
        : Object.keys(EnumColumnProductTable).map(value => EnumColumnProductTable[value as any]);
    }
  }

  eventMouseClickByRow(row: ProductRow) {
    this.clickByRow.emit(row);
  }

  eventMouseClickByActionBtn() {
    this.clickByActionBtn.emit(this.selection.selected);
  }

  getTotalPrice(): number {
    return this.selection.selected.reduce((sum, item) => sum += item.price, 0);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}

export enum EnumColumnProductTable {
  TITLE = 'title',
  PRICE = 'price',
  TYPE = 'type',
  DESCRIPTION = 'description',
  CHECK = 'check'
}

export interface ProductRow {
  id: string;
  type: TypeServiceEnum;
  title: string;
  price: number;
}

export interface TableSetting {
  hiddenActionBtn: boolean;
  titleActionBtn: string;
}
