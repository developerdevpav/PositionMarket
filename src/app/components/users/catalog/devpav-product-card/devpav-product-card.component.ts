import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCheckboxChange} from "@angular/material";

@Component({
  selector: 'devpav-product-card',
  templateUrl: './devpav-product-card.component.html',
  styleUrls: ['./devpav-product-card.component.scss']
})
export class DevpavProductCardComponent implements OnInit {

  @Input()
  options: DevpavProductCardProps;

  @Output()
  checked: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  eventMatChecked(matCheckboxChange: MatCheckboxChange) {
    this.checked.emit(matCheckboxChange.checked);
  }

}

export interface DevpavProductCardProps {
  id: string;
  title: string;
  price: number;
  icon: string;
  showCheckBox: boolean;
  checked: boolean;
}
