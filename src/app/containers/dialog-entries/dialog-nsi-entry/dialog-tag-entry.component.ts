import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import {DialogActionNsiComponent, DialogActionNsiProps} from '../../dialogs/dialog-action-nsi/dialog-action-nsi.component';
import {select, Store} from '@ngrx/store';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {getById} from 'src/app/store/tag/tag.selectors';
import {CreateTag, GetTagById, UpdateTag} from 'src/app/store/tag/tag.actions';
import {getEnumByStringValue} from 'src/app/helpers/util/guard.util';
import {TranslateService} from '@ngx-translate/core';
import {dispatchAfterClosed} from '../dialog.entity.util';

export enum EntityNsiActionEnum { EDIT = 'edit', VIEW = 'view', CREATE = 'create' }

export enum EntityNsiTablesEnum { TAGS = 'tags', TYPES = 'types' }

@Component({template: ''})
export class DialogTagEntryComponent implements OnInit, OnDestroy, AfterContentInit {

  subscription$: Subscription = new Subscription();

  action: string;

  dialogRef: any;

  constructor(private store: Store<any>,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private translate: TranslateService) {
  }

  ngOnInit() {
    console.log('DialogNsiEntryComponent');
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  private getTitleWindow = (enumAction: EntityNsiActionEnum) => {
    switch (enumAction) {
      case EntityNsiActionEnum.CREATE:
        return 'ACTIONS.CREATE';
      case EntityNsiActionEnum.EDIT:
        return 'ACTIONS.CHANGE';
      case EntityNsiActionEnum.VIEW:
        return 'ACTIONS.VIEWING';
      default:
        return 'ACTIONS.CREATING';
    }
  }

  openDialog(props: DialogActionNsiProps): void {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(DialogActionNsiComponent, {
        width: '700px',
        height: 'auto',
        data: props
      });

      const subscriberAfterClosed = this.dialogRef.afterClosed().subscribe((value) => {
        this.dialogRef = undefined;

        dispatchAfterClosed(props.type)
          (this.store, this.route, this.router)
            (new CreateTag({tag: value}), new UpdateTag({tag: value}));
      });

      this.subscription$.add(subscriberAfterClosed);
    }
  }

  ngAfterContentInit(): void {
    const paramSubscriber = this.route.params.subscribe(params => {

      const enumAction = getEnumByStringValue(EntityNsiActionEnum, params.action) as unknown as EntityNsiActionEnum;

      const title = this.translate.get(this.getTitleWindow(enumAction));
      const buttonTitle = this.translate.get(`ACTIONS.${(params.action as string).toUpperCase()}`);

      const propsDialogAction: DialogActionNsiProps = {
        type: params.action,
        entity: undefined,
        titleWindow: title,
        btnTitle: buttonTitle
      };

      if (enumAction !== EntityNsiActionEnum.CREATE) {
        const props = {id: params.id};

        this.store.dispatch(new GetTagById(props));

        const getEntity = this.store.pipe(select(getById, {id: params.id})).subscribe(entity => {
          if (entity) {
            setTimeout(() => this.openDialog({...propsDialogAction, entity} as DialogActionNsiProps), 100);
          }
        });
        this.subscription$.add(getEntity);
      } else {
        setTimeout(() => this.openDialog(propsDialogAction), 100);
      }
    });

    this.subscription$.add(paramSubscriber);
  }

}