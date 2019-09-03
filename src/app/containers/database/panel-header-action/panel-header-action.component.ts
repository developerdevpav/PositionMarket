import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

enum IconAction {
  ADD = 'ADD_VALUE',
  DELETE_ALL = 'DELETE_ALL_VALUE'
}

@Component({
  selector: 'panel-header-action',
  templateUrl: './panel-header-action.component.html',
  styleUrls: ['./panel-header-action.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelHeaderActionComponent implements OnInit, AfterContentInit {

  @Input()
  title = '';

  @Output()
  eventCreate = new EventEmitter<boolean>();
  @Output()
  eventSelectAll = new EventEmitter<boolean>();
  @Output()
  eventDeleteSelected = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {

  }

}
