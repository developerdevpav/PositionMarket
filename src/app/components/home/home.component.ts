import { Component, OnInit } from '@angular/core';
import {ListItem} from 'ng-multiselect-dropdown/multiselect.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedItems = [];
  dropdownList = ['fsdfds', 'fdsfds', 'fdfndfnew'];
  dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor() { }

  ngOnInit() {
  }

  onSelectAll($event: Array<ListItem>) {

  }

  onItemSelect($event: ListItem) {

  }
}
