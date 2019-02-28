import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectTagsByLanguage, selectTypeById, selectTypesByLanguage} from '../../../../store/selectors/selectors';
import {
  ApiTypeCreate,
  ApiTypeDelete,
  ApiTypeLoadAll,
  ApiTypeUpdate
} from '../../../../store/actions/type.actions';
import {DialogEditEntityComponent} from '../../../universal/dialogs/dialog-edit-entity/dialog-edit-entity.component';
import {ApiTagCreate, ApiTagDelete, ApiTagLoadAll, ApiTagUpdate} from '../../../../store/actions/tag.actions';
import {MatDialog} from '@angular/material';
import {Tag} from '../../../../store/models/tag.model';
import {Type} from '../../../../store/models/type.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  $types: Observable<{ uuid: string, value: string }[]> = this.store.select(selectTypesByLanguage);
  value: Type;

  constructor(public dialog: MatDialog, private store: Store<any>) {}

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
    this.$types.subscribe(value1 => {
      console.log('load list tags');
    });
    this.store.dispatch(new ApiTypeLoadAll());
  }

  create($event) {
    console.log('create');
    this.openDialog('create', $event);
  }

  changeOrView($event, action: string) {
    this.store.select(selectTypeById, {id: $event}).subscribe(value => {
      this.value = value;
    });
    this.openDialog(action, this.value);
  }

  delete($event) {
    console.log(`delete: ${$event}`);
    this.store.dispatch(new ApiTypeDelete($event));
  }

}
