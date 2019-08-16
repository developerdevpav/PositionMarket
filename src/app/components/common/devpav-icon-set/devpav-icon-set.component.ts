import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface DevpavIconSetProps {
  icons: DevpavIconSetIcon[];
}

export interface DevpavIconSetIcon {
  id: string | number;
  iconTitle: string;
  disable?: boolean;
  color?: string;
}

export interface DevpavIconClickOutput {
  id: string | number;
  event: MouseEvent;
}

@Component({
  selector: 'app-devpav-icon-set',
  templateUrl: './devpav-icon-set.component.html',
  styleUrls: ['./devpav-icon-set.component.scss']
})
export class DevpavIconSetComponent implements OnInit {

  @Input()
  props: DevpavIconSetProps;

  @Output()
  clickIcon: EventEmitter<DevpavIconClickOutput> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  eventClickIcon($event: MouseEvent, icon: DevpavIconSetIcon) {
    this.clickIcon.emit({ id: icon.id, event: $event });
  }

  changeValueDisableIcon(idIcon: string | number) {
    if (this.props && this.props.icons) {
      const icon = this.props.icons.find(it => idIcon === it.id);
      if (icon) {
        console.log('changeValueDisableIcon: ', icon);
        icon.disable = !icon.disable;
      }
    }
  }
}
