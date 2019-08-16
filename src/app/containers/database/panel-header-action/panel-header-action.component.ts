import {AfterContentInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  DevpavIconClickOutput,
  DevpavIconSetComponent,
  DevpavIconSetProps
} from '../../../components/common/devpav-icon-set/devpav-icon-set.component';

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
  @ViewChild(DevpavIconSetComponent) component: DevpavIconSetComponent;

  iconSetProps: DevpavIconSetProps = {
    icons: [
      {
        id: IconAction.ADD,
        iconTitle: 'add'
      },
      {
        id: IconAction.DELETE_ALL,
        iconTitle: 'playlist_add_check',
        color: 'red'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }



  clickActionPanel($event: DevpavIconClickOutput) {
    console.log($event);
  }

  ngAfterContentInit(): void {
    console.log(this.component);
  }

  disableAdd() {
    this.component.changeValueDisableIcon(IconAction.ADD);
  }

}
