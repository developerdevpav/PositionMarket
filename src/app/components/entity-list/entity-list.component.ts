import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {DialogEditEntityComponent} from '../dialog-edit-entity/dialog-edit-entity.component';
import {MatDialog} from '@angular/material';
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
  @Output() deleteChange = new EventEmitter();

  @Output() getElementById = new EventEmitter<Action>();

  edit = false;
  create = false;

  constructor(public dialog: MatDialog, public store: Store<any>) {}

  openDialog(action: string): void {
    const dialogRef = this.dialog.open(DialogEditEntityComponent, {
      hasBackdrop: true,
      width: '650px',
      height: '270px',
      data: { change: action, object: this.selected[0] }
    });

    dialogRef.afterClosed().subscribe(data => {
      if ( data && data.change && data.entity ) {
        console.log(data + ' ' + data.change + ' ' + data.entity);
        switch (data.change) {
          case 'create': {
            return this.createChange.emit(data.entity);
          }
          case 'change': {
            return this.changeChange.emit(data.entity);
          }
          default:
            return;
        }
      }
    });
  }

  deleteFunction() {
    this.deleteChange.emit(this.selected);
    this.selected = [];
  }

  addToSelectList(uuid: string) {
    this.selected.push(uuid);
    console.log(this.selected);
  }

  removeFromSelected(uuid: string) {
    this.selected = this.selected.filter(it => it !== uuid);
    console.log(this.selected);
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
  }

}
