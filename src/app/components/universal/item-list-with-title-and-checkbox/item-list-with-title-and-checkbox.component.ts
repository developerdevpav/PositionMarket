import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {MatCheckboxChange} from '@angular/material';

@Component({
  selector: 'app-item-list-with-title-and-checkbox',
  templateUrl: './item-list-with-title-and-checkbox.component.html',
  styleUrls: ['./item-list-with-title-and-checkbox.component.scss']
})
export class ItemListWithTitleAndCheckboxComponent implements OnInit {

  @Input()
  entity: { index: string, title: string };
  @Input()
  checked: boolean;

  @Output()
  change: EventEmitter<{event: MatCheckboxChange; uuid: string}> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  checkboxEvent($event: MatCheckboxChange, index: string) {
    this.change.emit({ event: $event, uuid: index });
  }

}

