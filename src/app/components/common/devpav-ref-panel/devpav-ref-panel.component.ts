import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export default interface DevpavRefPanelProps {
  idPanelRef: string | number | undefined;
  titleRef?: string;
}

export interface DevpavRefPanelIcon {
  iconSvg: string;
  iconColor: string;
}

export interface DevpavRefPanelStyle {
  height?: string;
  background?: string;
}

export interface DevpavRefPanelTitleStyle {
  height?: string;
  background?: string;
}


@Component({
  selector: 'devpav-ref-panel',
  templateUrl: './devpav-ref-panel.component.html',
  styleUrls: ['./devpav-ref-panel.component.scss']
})
export class DevpavRefPanelComponent implements OnInit, AfterContentInit {

  @Input()
  public props: DevpavRefPanelProps = {
    idPanelRef: '',
    titleRef: ''
  };

  @Input()
  public iconSetting: DevpavRefPanelIcon;

  @Input()
  public panelStyle: DevpavRefPanelStyle = {
    height: '70px',
    background: 'white'
  };

  @Input()
  fontSizeTitle: string = '18px';

  @Input()
  fontColorTitle: string = 'black';

  @Output()
  clickRef: EventEmitter<string | number | undefined> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onClickRef() {
    this.clickRef.emit(this.props.titleRef);
  }

  getPanelStyle() {
    return {
      height: this.panelStyle.height,
      background: this.panelStyle.background
    }
  }

  ngAfterContentInit(): void {
  }

}
