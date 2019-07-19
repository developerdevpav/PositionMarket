import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'devpav-checkbox',
  templateUrl: './devpav-checkbox.component.html',
  styleUrls: ['./devpav-checkbox.component.scss']
})
export class DevpavCheckboxComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
