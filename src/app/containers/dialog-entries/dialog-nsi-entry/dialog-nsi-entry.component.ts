import {Component, OnDestroy, OnInit} from '@angular/core';
import {DialogActionNsiComponent, DialogActionNsiProps} from '../../dialogs/dialog-action-nsi/dialog-action-nsi.component';
import {Action, select, Store} from '@ngrx/store';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {getById} from 'src/app/store/tag/tag.selectors';
import {GetTagById} from 'src/app/store/tag/tag.actions';
import {getEnumByStringValue} from 'src/app/helpers/util/guard.util';
import {GetTypeById} from 'src/app/store/type/type.actions';
import {TranslateService} from '@ngx-translate/core';
import {Location} from '@angular/common';

export enum EntityNsiActionEnum { EDIT = 'edit', VIEW = 'view' }

export enum EntityNsiTablesEnum { TAGS = 'tags', TYPES = 'types' }

@Component({ template: '' })
export class DialogNsiEntryComponent implements OnInit, OnDestroy {

  subscription$: Subscription = new Subscription();

  action: string;
  table: string;

  dialogRef: any;

  constructor(private store: Store<any>,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private translate: TranslateService,
              private location: Location) { }

  ngOnInit() {
    const paramSubscriber = this.route.params.subscribe(params => {

      const props = { id: params.id };

      this.table = params.table;

      const thisIsTagTable = EntityNsiTablesEnum.TAGS === this.table;
      const action: Action = thisIsTagTable ? new GetTagById(props) : new GetTypeById(props);

      this.store.dispatch(action);

      const enumAction = getEnumByStringValue(EntityNsiActionEnum, params.action) as unknown as EntityNsiActionEnum;

      const propsDialogAction: DialogActionNsiProps = {
        type: enumAction,
        entity: undefined,
        titleWindow: this.translate.get('ACTIONS.VIEWING'),
        btnTitle: this.translate.get(`ACTIONS.${(params.action as string).toUpperCase()}`),
      };

      const getEntity = this.store.pipe(select(getById, { id: params.id })).subscribe(entity => {
        if (entity) {
          this.openDialog({ ...propsDialogAction, entity } as DialogActionNsiProps);
        }
      });

      this.subscription$.add(getEntity);
    });

    this.subscription$.add(paramSubscriber);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  eventCheck() {
  }

  openDialog(props: DialogActionNsiProps): void {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(DialogActionNsiComponent, {
        width: '700px',
        height: 'auto',
        data: props
      });

      this.subscription$.add(
        this.dialogRef.componentInstance.actions.subscribe(console.log));

      this.subscription$.add(this.dialogRef.afterClosed().subscribe(() => {
        this.dialogRef = undefined;
      }));
    }
  }

}
