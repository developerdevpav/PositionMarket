import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ThemeColorClassConfig, ThemePalette, themePaletteObject} from '../../../config/theme.config';

export interface EventChipIconClick {
  event: MouseEvent;
  id: string;
}

export interface EventChipClick {
  event: MouseEvent;
  id: string;
}


@Component({
  selector: 'devpav-chip',
  templateUrl: './devpav-chip.component.html',
  styleUrls: ['./devpav-chip.component.scss'],
  animations: [
    trigger('activeAnimation',
      [
        state('inactive', style({opacity: '0', display: 'none'})),
        state('active', style({opacity: '1'})),

        transition('inactive => active', [
          style({display: 'block'}),
          animate('50ms ease-in')
        ]),

        transition('active => inactive', [
          animate('50ms ease-in')
        ])
      ])
  ]
})
export class DevpavChipComponent implements OnChanges {
  @ViewChild('chip') chip: ElementRef<any>;

  stateVisible = 'inactive';

  @Input()
  icon: string;

  @Input()
  hiddenIcon = false;

  @Output()
  eventClickIcon = new EventEmitter<EventChipIconClick>();
  @Output()
  eventClickChip = new EventEmitter<EventChipClick>();

  @Input()
  idChip: string;

  @Input()
  value: string;

  @Input()
  color: ThemePalette = undefined;

  colorClassTemplate: ThemeColorClassConfig;

  class: {};

  constructor() {
    this.colorClassTemplate = themePaletteObject(
      'devpav-chip-accent',
      'devpav-chip-primary',
      'devpav-chip-warn',
      'devpav-chip-default'
    );
  }

  mouseover($event: MouseEvent) {
    if (!this.hiddenIcon) {
      this.stateVisible = 'active';
    }
  }

  mouseout($event: MouseEvent) {
    this.stateVisible = 'inactive';
  }

  handlerClickIcon($event: MouseEvent) {
    $event.stopPropagation();
    this.eventClickIcon.emit({event: $event, id: this.idChip});
  }

  handlerClickChip($event: MouseEvent) {
    this.eventClickChip.emit({event: $event, id: this.idChip});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.color && changes.color.currentValue) {
      const color = changes.color;
      const theme: ThemePalette = color.currentValue;
      this.class = this.colorClassTemplate[theme];
    }
  }
}
