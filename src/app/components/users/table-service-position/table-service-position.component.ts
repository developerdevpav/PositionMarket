import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {TypeServiceEnum} from '../../../store/models/type-service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {getSelectProduct} from '../../../store/selectors/position.selectors';

export interface Row {
  id: string;
  type: TypeServiceEnum;
  title?: string;
  price: number;
}

export interface TableServicePositionProps {
  id?: string,
  data?: Row[],
  selectData?: Row[]
}

export interface TableSetting {
  hiddenHeader: boolean;
  hiddenFooter: boolean;
  disabledRow: boolean;
}

export enum EnumColumnProductTable {
  TITLE = 'title',
  PRICE = 'price',
  TYPE = 'type',
  DESCRIPTION = 'description',
  CHECK = 'check'
}

@Component({
  selector: 'table-service-position',
  templateUrl: './table-service-position.component.html',
  styleUrls: ['./table-service-position.component.scss']
})
export class TableServicePositionComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [];

  selection: SelectionModel<Row>;
  dataSource: MatTableDataSource<Row>;

  subscriber: Subscription = new Subscription();

  @Input()
  public props: TableServicePositionProps = {
    id: '',
    data: [],
    selectData: []
  };

  @Input()
  set columns(columns: EnumColumnProductTable[]) {
    if (columns && columns.length !== 0) {
      this.displayedColumns = (columns && columns.length !== 0)
        ? columns.map(it => it.toString())
        : Object.keys(EnumColumnProductTable)
          .map(value => EnumColumnProductTable[value as any]);
    }
  }

  @Input()
  setting: TableSetting;

  @Output()
  selectedItems: EventEmitter<Row[]> = new EventEmitter();

  @Output()
  selectItem: EventEmitter<Row> = new EventEmitter();

  @Output()
  unselectItem: EventEmitter<Row> = new EventEmitter();

  @Output()
  clickByRow: EventEmitter<Row> = new EventEmitter();

  @Output()
  clickByDescription: EventEmitter<Row> = new EventEmitter();

  @Output()
  clickByActionBtn: EventEmitter<Row[]> = new EventEmitter();

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.selection = new SelectionModel<Row>(true, this.props.data);
    this.selection.clear();

    this.dataSource = new MatTableDataSource<Row>(this.props.data);

    if (this.props.data == null) {
      this.props.data = [];
    }

    const subscriberOnChangeSelection = this.selection.changed.asObservable().subscribe(it => {
      if (it.added.length !== 0)
        this.selectItem.emit(it.added[0]);
      if (it.removed.length !== 0)
        this.unselectItem.emit(it.removed[0]);

      this.selectedItems.emit(this.selection.selected);
    });

    const subscriberProductSelect = this.store.select(getSelectProduct, this.props.data).subscribe(value => {
      value.forEach(it => this.selection.select(it));
      this.setting.disabledRow = (value && value.length > 0);
      console.log('subscriberProductSelect: ', value);
    });

    this.subscriber.add(subscriberOnChangeSelection);
    this.subscriber.add(subscriberProductSelect);
  }

  eventMouseClickByRow(row: Row) {
    this.clickByRow.emit(row);
  }

  eventMouseClickDescription(element: Row) {
    this.clickByDescription.emit(element);
  }

  getTotalPrice(): number {
    return this.selection.selected.reduce((sum, item) => sum += item.price, 0);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }


}

