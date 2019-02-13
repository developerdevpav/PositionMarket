import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectAll, State} from 'src/app/store/reducers/type.reducer';
import {LoadTypesApi} from '../../store/actions/type.actions';
import {Type} from '../../store/models/type.model';
import {Nsi} from '../../store/models/abstract.model';
import {DialogEditEntityComponent} from '../dialog-edit-entity/dialog-edit-entity.component';
import {DialogPosition, MatDialog} from '@angular/material';

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

  view = false;
  edit = false;
  create = false;

  constructor(public dialog: MatDialog) {
  }

  openDialog(action: string): void {
    const dialogRef = this.dialog.open(DialogEditEntityComponent, {
      hasBackdrop: true,
      width: '650px',
      height: '150px',
      data: {change: 'view', object: this.selected.shift()}
    });

    dialogRef.afterClosed().subscribe(data => {
      if ( data && data.change && data.entity ) {
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
