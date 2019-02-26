import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectTypeServicesByLanguage, selectTypeServiceById} from '../../../../store/selectors/selectors';
import {
  ApiTypeServiceCreate, ApiTypeServiceDelete,
  ApiTypeServiceLoadAll, ApiTypeServiceUpdate,
  DeleteTypeServices,
  UpdateTypeService
} from '../../../../store/actions/type-service.actions';
import { MatDialog } from '@angular/material';
import { TypeService } from 'src/app/store/models/type-service.model';
import { DialogEditEntityComponent } from '../../dialog-edit-entity/dialog-edit-entity.component';

@Component({
  selector: 'app-type-service',
  templateUrl: './type-service.component.html',
  styleUrls: ['./type-service.component.scss']
})
export class TypeServiceComponent implements OnInit {

  $typeservices: Observable<{ uuid: string, value: string }[]> = this.store.select(selectTypeServicesByLanguage);
  value: TypeService;

  constructor(public dialog: MatDialog, private store: Store<any>) {}

  openDialog(actionRef: string, typeService: TypeService): void {
    const dialogRef = this.dialog.open(DialogEditEntityComponent, {
      hasBackdrop: true,
      width: '650px',
      height: '270px',
      data: {
        action: actionRef,
        object: typeService
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.action && data.entity) {
        console.log(data + ' ' + data.change + ' ' + data.entity);
        switch (data.action) {
          case 'create': {

            this.store.dispatch(new ApiTypeServiceCreate(data.entity));
            break;
          }
          case 'change': {
            this.store.dispatch(new ApiTypeServiceUpdate(data.entity));
            break;
          }
          default: return;
        }
      }
    });
  }

  ngOnInit() {
    this.$typeservices.subscribe(value1 => {
      console.log('load list tags');
    });
    this.store.dispatch(new ApiTypeServiceLoadAll());
  }

  create($event) {
    console.log('create');
    this.openDialog('create', $event);
  }

  changeOrView($event, action: string) {
    this.store.select(selectTypeServiceById, {id: $event}).subscribe(value => {
      this.value = value;
    });
    this.openDialog(action, this.value);
  }

  delete($event) {
    console.log(`delete: ${$event}`);
    this.store.dispatch(new ApiTypeServiceDelete($event));
  }
}
