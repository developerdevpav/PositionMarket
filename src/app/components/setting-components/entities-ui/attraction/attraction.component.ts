import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {ApiAttractionDelete, ApiAttractionLoadAll} from '../../../../store/actions/attraction.actions';
import {ApiTagCreate, ApiTagUpdate} from '../../../../store/actions/tag.actions';
import {MatDialog} from '@angular/material';
import {DialogActionAttractionComponent} from '../../../universal/dialogs/dialog-action-attraction/dialog-action-attraction.component';
import {selectShortPositionsByLanguage} from '../../../../store/selectors/position.selectors';
import {ApiTypeServiceLoadAll} from '../../../../store/actions/type-service.actions';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit, OnDestroy {

  listForList$: { id: string, title: string } [] = [];
  private subscriberGetAll: Subscription;

  constructor(public dialog: MatDialog, private store: Store<any>) {
  }

  openDialog(actionRef: string, uuid: string): void {
    const dialogRef = this.dialog.open(DialogActionAttractionComponent, {
      width: 'inherit',
      height: 'inherit',
      data: {
        action: actionRef,
        id: uuid
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      this.store.dispatch(new ApiTypeServiceLoadAll());
      console.log('load');
      /*if (data && data.action && data.entity) {
        console.log(data + ' ' + data.change + ' ' + data.entity);
        switch (data.action) {
          case 'create': {
            this.store.dispatch(new ApiTagCreate(data.entity));
            break;
          }
          case 'change': {
            this.store.dispatch(new ApiTagUpdate((data.entity)));
            break;
          }
          default:
            return;
        }
      }*/
    });
  }

  ngOnInit() {
    this.store.dispatch(new ApiAttractionLoadAll());
    this.subscriberGetAll = this.store.select(selectShortPositionsByLanguage).subscribe(list => {
      this.listForList$ = list;
    });
  }

  create() {
    this.openDialog('create', undefined);
  }

  changeOrView($event, action: string) {
    this.openDialog(action, $event);
  }

  delete($event) {
    this.store.dispatch(new ApiAttractionDelete($event));
  }

  ngOnDestroy(): void {
    this.subscriberGetAll.unsubscribe();
  }

}
