import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GroupDataComponent, ItemSelect, ItemSelectIcon} from '../group-data/group-data.component';

export enum IconType {
  ADD = 'ADD ICON',
  CHANGE = 'CHANGE ICON',
  DELETE = 'DELETE ICON',
  VIEW = 'VIEW ICON',
  SELECT_ALL = 'SELECT ALL ICON'
}

@Component({
  selector: 'form-group-data',
  templateUrl: './form-group-data.component.html',
  styleUrls: ['./form-group-data.component.scss']
})
export class FormGroupDataComponent implements OnInit, AfterContentInit {
  @ViewChild(GroupDataComponent) groupData: GroupDataComponent;

  settingPanelIcon: ItemSelectIcon = {
    showIcon: true,
    title: 'chevron_right'
  };

  @Output()
  createEntity: EventEmitter<boolean> = new EventEmitter();

  @Output()
  changeEntity: EventEmitter<string> = new EventEmitter();

  @Output()
  deleteEntity: EventEmitter<string[]> = new EventEmitter();

  @Output()
  viewEntity: EventEmitter<string> = new EventEmitter();

  @Input()
  items: ItemSelect[] = [];

  @Input()
  titleHeader: string;

  constructor() {}

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

  eventSelectAll() {
    this.items.forEach(it => this.groupData.selector.toggle(it.id as string));
  }

}
