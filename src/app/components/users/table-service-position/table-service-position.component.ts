import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TypeServiceEnum} from '../../../store/models/type-service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-table-service-position',
  templateUrl: './table-service-position.component.html',
  styleUrls: ['./table-service-position.component.scss']
})
export class TableServicePositionComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [];
  selection: SelectionModel<ProductRow>;
  dataSource: MatTableDataSource<ProductRow>;

  subscriber: Subscription = new Subscription();

  @Input()
  data: ProductRow[] = [];

  @Input()
  setting: TableSetting;

  @Output()
  selectItem: EventEmitter<ProductRow> = new EventEmitter();

  @Output()
  unselectItem: EventEmitter<ProductRow> = new EventEmitter();

  @Output()
  onClickByRow: EventEmitter<ProductRow> = new EventEmitter();

  constructor() {}

  @Input()
  set columns(columns: EnumColumnProductTable[]) {
    if (columns && columns.length !== 0) {
      this.displayedColumns = (columns && columns.length !== 0)
        ? columns.map(it => it.toString())
        : Object.keys(EnumColumnProductTable).map(value => EnumColumnProductTable[value as any]);
    }
  }

  eventMouseClickByRow(row: ProductRow) {
    this.onClickByRow.emit(row);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ProductRow>(this.data);
    this.selection = new SelectionModel<ProductRow>(true, this.data);
    this.selection.clear();

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
