import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor() {

  }
  ngOnInit() {


    this.itemList = [
      {id: 1, itemName: 'India'},
      {id: 2, itemName: 'Singapore'},
      {id: 3, itemName: 'Australia'},
      {id: 4, itemName: 'Canada'},
      {id: 5, itemName: 'South Korea'},
      {id: 6, itemName: 'Brazil'}
    ];

    this.selectedItems = [
      {id: 1, itemName: 'India'}];
    this.settings = {singleSelection: true, text: 'Select Country'};
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}
