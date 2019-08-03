import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface DevpavInformationPanelProps {
  title: string;
  description: string;
}

interface StyleFont {
  fontSize: string;
  fontColor: string;
}

@Component({
  selector: 'devpav-information-panel',
  templateUrl: './devpav-information-panel.component.html',
  styleUrls: ['./devpav-information-panel.component.scss']
})
export class DevpavInformationPanelComponent implements OnInit {

  @Input()
  public props: DevpavInformationPanelProps;

  @Input()
  btnTitle: string;

  @Output()
  clickBtn: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
