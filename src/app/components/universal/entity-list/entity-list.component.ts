import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  @Input()
  list$: { id: string, title: string }[];

  selected: string[] = [];

  @Output() createChange = new EventEmitter();
  @Output() changeChange = new EventEmitter();
  @Output() viewChange = new EventEmitter();
  @Output() deleteChange = new EventEmitter();

  @Output() getElementById = new EventEmitter<Action>();

  public paramSearch = '';

  constructor(public store: Store<any>) {
  }

  create() {
    this.createChange.emit(undefined);
  }

  change() {
    this.changeChange.emit(this.selected[0]);
  }

  historySelect(id: string) {
    return this.selected.find(value => id === value) !== undefined;
  }

  view() {
    this.viewChange.emit(this.selected[0]);
  }

  deleteFunction() {
    this.deleteChange.emit(this.selected);
    this.selected = [];
  }

  addToSelectList(uuid: string) {
    this.selected.push(uuid);
  }

  removeFromSelected(uuid: string) {
    this.selected = this.selected.filter(it => it !== uuid);
  }

  checkboxEvent($event, uuid: string) {
    switch ($event.checked) {
      case true: {
        return this.addToSelectList(uuid);
      }
      case false: {
        return this.removeFromSelected(uuid);
      }
    }
  }

  ngOnInit() {
    this.selected = [];
  }

}
