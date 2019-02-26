import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Action, Store} from '@ngrx/store';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  @Input()
  list$: Observable<{ uuid: string, value: string }[]>;

  selected: string[] = [];

  @Output() createChange = new EventEmitter();
  @Output() changeChange = new EventEmitter();
  @Output() viewChange = new EventEmitter();
  @Output() deleteChange = new EventEmitter();

  @Output() getElementById = new EventEmitter<Action>();

  constructor(public store: Store<any>) {}

  create() {
    console.log('create EntityListComponent');
    this.createChange.emit(undefined);
  }

  change() {
    console.log('change EntityListComponent');
    this.changeChange.emit(this.selected[0]);
  }

  historySelect(id: string) {
    return this.selected.find(value => id === value) !== undefined;
  }

  view() {
    console.log('view EntityListComponent');
    this.viewChange.emit(this.selected[0]);
  }

  deleteFunction() {
    console.log('delete EntityListComponent');
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
    console.log('load listEntity');
    this.selected = [];
  }

}
