import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DevpavIconClickOutput, DevpavIconSetProps} from '../../../components/common/devpav-icon-set/devpav-icon-set.component';

@Component({
  selector: 'wrapper-group-data',
  templateUrl: './wrapper-group-data.component.html',
  styleUrls: ['./wrapper-group-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperGroupDataComponent implements OnInit, AfterContentInit {

  @Output()
  clickIcon: EventEmitter<DevpavIconClickOutput> = new EventEmitter();

  @Input()
  titleHeader: string;

  @Input()
  iconProps: DevpavIconSetProps;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

  disable(id: string, value: boolean) {
    // this.panel.disable(id, value);
  }

  hidden(id: string, value: boolean) {
    /*this.panel.hidden(id, value);*/
  }

  eventClickIcon($event: DevpavIconClickOutput) {
    this.clickIcon.emit($event);
  }
}
