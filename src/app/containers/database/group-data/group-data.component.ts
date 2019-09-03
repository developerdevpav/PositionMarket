import {AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {ItemDataSelect} from '../item-data/item-data.component';

export interface ItemSelectIcon {
  showIcon: boolean;
  title: string;
}

export interface ItemSelect {
  id: string | number;
  value: string;
}

@Component({
  selector: 'group-data',
  templateUrl: './group-data.component.html',
  styleUrls: ['./group-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupDataComponent implements OnInit, AfterContentInit, OnChanges {

  @Input()
  items: ItemSelect[] = [];

  @Output()
  eventDelete = new EventEmitter<string>();
  @Output()
  eventChange = new EventEmitter<string>();
  @Output()
  eventView = new EventEmitter<string>();

  @Output()
  selected: EventEmitter<string[]> = new EventEmitter();

  selector: SelectionModel<string>;

  constructor() {
    this.selector = new SelectionModel<string>(true, []);
  }

  ngOnInit() {
    this.selector.changed.subscribe(value => {
      this.selected.emit(this.selector.selected);
      console.log(this.selector.selected);
    });
  }

  ngAfterContentInit() {
  }

  eventChangeItem($event: string) {
    this.eventChange.emit($event);
  }

  eventViewItem($event: string) {
    this.eventView.emit($event);
  }

  eventDeleteItem($event: string) {
    this.selector.deselect($event);
    this.eventDelete.emit($event);
  }

  eventToggleItem($event: ItemDataSelect) {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
