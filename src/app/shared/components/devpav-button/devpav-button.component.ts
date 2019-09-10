import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
