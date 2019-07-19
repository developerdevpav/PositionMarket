import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'devpav-card',
  templateUrl: './devpav-card.component.html',
  styleUrls: ['./devpav-card.component.scss']
})
export class DevpavCardComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
