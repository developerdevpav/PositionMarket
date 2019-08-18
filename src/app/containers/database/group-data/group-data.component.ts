import {AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatListOption, MatSelectionList} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

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
export class GroupDataComponent implements OnInit, AfterContentInit {
  @ViewChild('shoes') template: ElementRef<HTMLElement>;

  listItems: MatSelectionList;

  @Input()
  icon: ItemSelectIcon;

  @Input()
  items: ItemSelect[] = [];

  @Output()
  selected: EventEmitter<string[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  eventSelectItems($event: SelectionModel<MatListOption>) {
    const selectIds: string[] = $event.selected.map(matOption => matOption.value);
    this.selected.emit(selectIds);
  }

  getClassTitle(): string {
    return this.icon.showIcon ? '' : 'title-icon';
  }

}
