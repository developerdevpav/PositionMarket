import {OnDestroy, OnInit} from '@angular/core';
import {Action, MemoizedSelector, MemoizedSelectorWithProps, Store} from '@ngrx/store';
import {DialogEditEntityComponent} from '../../universal/dialogs/dialog-edit-entity/dialog-edit-entity.component';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';
import {LanguageState} from '../../../store/reducers/language.reducer';

export abstract class AbstractNsiComponent<T> implements OnInit, OnDestroy {

  list: { id: string, title: string }[] = [];

  private value: T;

  private subscriber: Subscription = new Subscription();

  protected constructor(public store: Store<any>, public dialog: MatDialog) {}

  openDialog(actionRef: string, value: T): void {
    const dialogRef = this.dialog.open(DialogEditEntityComponent, {
      hasBackdrop: true,
      width: '650px',
      height: '270px',
      data: {
        action: actionRef,
        object: value
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.action && data.entity) {
        switch (data.action) {
          case 'create': {
            this.store.dispatch(this.getActionForCreate(data.entity));
            break;
          }
          case 'change': {
            this.store.dispatch(this.getActionForChange(data.entity));
            break;
          }
          default:
            return;
        }
      }
    });
  }

  protected abstract getActionForCreate(object: T): Action;

  protected abstract getActionForChange(object: T): Action;

  protected abstract getActionForDelete(uuids: string[]): Action;

  protected abstract getActionForLoadAll(): Action;

  protected abstract getSelectorForGetNsiById(): MemoizedSelectorWithProps<T, any, any>;

  protected abstract getSelectorForGetAllNsi(): MemoizedSelector<LanguageState, { id: string, title: string }[]>;

  create($event) {
    this.openDialog('create', $event);
  }

  changeOrView($event, action: string) {
    this.subscriber.add(
      this.store.select(this.getSelectorForGetNsiById(), {id: $event})
        .subscribe((value: T) => this.value = value)
    );
    this.openDialog(action, this.value);
  }

  delete(uuids: string[]) {
    this.store.dispatch(this.getActionForDelete(uuids));
  }

  public ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  public ngOnInit(): void {
    this.store.dispatch(this.getActionForLoadAll());
    this.subscriber.add(this.store.select(this.getSelectorForGetAllNsi()).subscribe(list => this.list = list));
  }
}
