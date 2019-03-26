import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-panel-entity',
  templateUrl: './panel-entity.component.html',
  styleUrls: ['./panel-entity.component.scss']
})
export class PanelEntityComponent implements OnInit {

  @Output() createChange = new EventEmitter();
  @Output() changeChange = new EventEmitter();
  @Output() viewChange = new EventEmitter();
  @Output() deleteChange = new EventEmitter();
  @Output() paramSearch = new EventEmitter();

  @Input()
  selected: number;

  focusSearch = false;

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.createChange.emit(undefined);
  }

  change() {
    this.changeChange.emit(this.selected[0]);
  }

  view() {
    this.viewChange.emit(this.selected[0]);
  }

  deleteFunction() {
    this.deleteChange.emit(this.selected);
  }

  changeFocusSearchInput(value) {
    this.focusSearch = value;
  }

}
