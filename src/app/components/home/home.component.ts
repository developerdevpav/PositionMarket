import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemList = [
    {id: 1, itemName: 'India'},
    {id: 2, itemName: 'Singapore'},
    {id: 3, itemName: 'Australia'},
    {id: 4, itemName: 'Canada'},
    {id: 5, itemName: 'South Korea'},
    {id: 6, itemName: 'Brazil'}
  ];

  selectedItems = [
    {id: 1, itemName: 'India'},
    {id: 2, itemName: 'Singapore'},
    {id: 3, itemName: 'Australia'},
    {id: 4, itemName: 'Canada'}];



  constructor() {
}

  ngOnInit() {
  }

}
