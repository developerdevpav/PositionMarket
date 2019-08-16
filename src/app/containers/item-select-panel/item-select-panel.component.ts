import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MatSelectionListChange} from "@angular/material";

export interface ItemSelectIcon {
  showIcon: boolean;
  title: string;
}

export interface ItemSelect {
  id: string;
  value: string;
}

@Component({
  selector: 'item-select-panel',
  templateUrl: './item-select-panel.component.html',
  styleUrls: ['./item-select-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemSelectPanelComponent implements OnInit {

  @Input()
  icon: ItemSelectIcon;

  @Input()
  items: ItemSelect[] = [];

  constructor() { }

  ngOnInit() {
  }


  eventSelectItems($event: MatSelectionListChange) {
    console.log($event.option.value);
  }
}
