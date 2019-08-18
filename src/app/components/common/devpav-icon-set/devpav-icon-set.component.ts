import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface DevpavIconSetProps {
  icons: DevpavIconSetIcon[];
}

export interface DevpavIconSetIcon {
  id: string | number;
  iconTitle: string;
  disable?: boolean;
  color?: string;
  hidden?: boolean;
}

export interface DevpavIconClickOutput {
  id: string | number;
  event: MouseEvent;
}

@Component({
  selector: 'devpav-icon-set',
  templateUrl: './devpav-icon-set.component.html',
  styleUrls: ['./devpav-icon-set.component.scss']
})
export class DevpavIconSetComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _props: DevpavIconSetProps;

  @Input()
  set props(props: DevpavIconSetProps) {
    this._props = props;
  }

  @Output()
  clickIcon: EventEmitter<DevpavIconClickOutput> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

/*
  disableIcon(idIcon: string | number, disable: boolean) {
    this.changeValue(idIcon, 'disable', disable);
  }

  hiddenIcon(idIcon: string | number, hidden: boolean) {
    this.changeValue(idIcon, 'show', hidden);
  }
*/

  eventClickIcon($event: MouseEvent, icon: DevpavIconSetIcon) {
    this.clickIcon.emit({id: icon.id, event: $event});
  }

  changeValue(id: string | number, fieldName: string, value: boolean) {
    if (this._props && this._props.icons) {
      const icon = this._props.icons.find(it => id === it.id);
      if (icon) {
        icon[fieldName] = value;
      }
    }
  }

}
