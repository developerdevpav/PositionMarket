import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MatCheckboxChange} from '@angular/material';

export interface ItemDataComponentProps {
  id: string;
  value: string;
}

export interface ItemDataSelect {
  id: string;
  checked: boolean;
}

@Component({
  selector: 'item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDataComponent implements OnInit {

  @Input()
  props: ItemDataComponentProps;

  @Output()
  ngDelete = new EventEmitter<string>();
  @Output()
  ngChange = new EventEmitter<string>();
  @Output()
  ngView = new EventEmitter<string>();

  @Output()
  ngChangeSelect = new EventEmitter<ItemDataSelect>();

  @Input()
  checked = false;

  constructor() { }

  ngOnInit() {
  }

  handleDelete() {
    this.ngDelete.emit(this.props.id);
  }

  handleChange() {
    this.ngChange.emit(this.props.id);
  }

  handleView() {
    this.ngView.emit(this.props.id);
  }

  changeSelectItem($event: MatCheckboxChange) {
    this.ngChangeSelect.emit({ id: this.props.id, checked: $event.checked } );
  }

}
