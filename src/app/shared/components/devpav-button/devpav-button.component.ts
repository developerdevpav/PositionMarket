import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'devpav-button',
  templateUrl: './devpav-button.component.html',
  styleUrls: ['./devpav-button.component.scss']
})
export class DevpavButtonComponent implements OnInit, OnChanges {

  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  color: string;

  classes = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const color = changes.color;
    if (color && color.currentValue) {
      this.classes = 'war' === color.currentValue ? 'devpav-btn-warning' : '';
    }
  }

  ngOnInit() {
  }

}
