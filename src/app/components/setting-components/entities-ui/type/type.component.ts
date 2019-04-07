import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {
  ApiTypeCreate,
  ApiTypeDelete,
  ApiTypeLoadAll,
  ApiTypeUpdate
} from '../../../../store/actions/type.actions';
import {DialogEditEntityComponent} from '../../../universal/dialogs/dialog-edit-entity/dialog-edit-entity.component';
import {MatDialog} from '@angular/material';
import {Type} from '../../../../store/models/type.model';
import {selectTypeById, selectTypesByLanguage} from '../../../../store/selectors/type.selectors';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  $types: Observable<{ id: string, title: string }[]> = this.store.select(selectTypesByLanguage);
  value: Type;

  constructor(public dialog: MatDialog, private store: Store<Type>) {

  }

  openDialog(actionRef: string, type: Type): void {
    const dialogRef = this.dialog.open(DialogEditEntityComponent, {
      hasBackdrop: true,
      width: '650px',
      height: '270px',
      data: {
        action: actionRef,
        object: type
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.action && data.entity) {
        console.log(data + ' ' + data.change + ' ' + data.entity);
        switch (data.action) {
          case 'create': {
            this.store.dispatch(new ApiTypeCreate(data.entity));
            break;
          }
          case 'change': {
            this.store.dispatch(new ApiTypeUpdate(data.entity));
            break;
          }
          default: return;
        }
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new ApiTypeLoadAll());
  }

  create($event) {
    this.openDialog('create', $event);
  }

  changeOrView($event, action: string) {
    this.store.select(selectTypeById, {id: $event}).subscribe(value => {
      this.value = value;
    });
    this.openDialog(action, this.value);
  }

  delete($event) {
    this.store.dispatch(new ApiTypeDelete($event));
  }

}
