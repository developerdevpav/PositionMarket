import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-service-of-position',
  templateUrl: './list-service-of-position.component.html',
  styleUrls: ['./list-service-of-position.component.scss']
})
export class ListServiceOfPositionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit ListServiceOfPositionComponent');
  }

}
