import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {ApiAttractionLoadAll, ApiAttractionsDelete} from '../../../../store/actions/attraction.actions';
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
    this.store.dispatch(new ApiAttractionsDelete($event));
  }

  ngOnDestroy(): void {
    this.subscriberGetAll.unsubscribe();
  }

}
