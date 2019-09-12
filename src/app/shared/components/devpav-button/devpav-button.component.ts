import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'devpav-button',
  templateUrl: './devpav-button.component.html',
  styleUrls: ['./devpav-button.component.scss']
})
export class DevpavButtonComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  color: string;

  constructor() { }

  ngOnInit() {
  }

}
