import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DevpavIconClickOutput, DevpavIconSetProps} from '../../../components/common/devpav-icon-set/devpav-icon-set.component';

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

  @Input()
  iconSetProps: DevpavIconSetProps;

  @Output()
  private clickIcon: EventEmitter<DevpavIconClickOutput> = new EventEmitter();

/*
  disable(id: string, value: boolean) {
    this.component.disableIcon(id, value);
  }

  hidden(id: string, value: boolean) {
    this.component.hiddenIcon(id, value);
  }
*/

  constructor() {
  }

  ngOnInit() {
  }

  clickActionPanel($event: DevpavIconClickOutput) {
    this.clickIcon.emit($event);
  }

  ngAfterContentInit(): void {

  }


}
