import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {DialogActionNsiComponent, DialogActionNsiProps} from '../../dialogs/dialog-action-nsi/dialog-action-nsi.component';
import {getEnumByStringValue} from '../../../helpers/util/guard.util';
import {getById} from '../../../store/type/type.selectors';
import {EntityNsiActionEnum} from '../dialog-nsi-entry/dialog-tag-entry.component';
import {CreateType, GetTypeById, UpdateType} from '../../../store/type/type.actions';
import {dispatchAfterClosed} from '../dialog.entity.util';

@Component({
  template: '',
})
export class DialogTypeEntityComponent implements OnInit, OnDestroy, AfterContentInit {

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
    console.log('DialogTypeEntityComponent');
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
  };

  openDialog(props: DialogActionNsiProps): void {
    if (this.dialogRef) {
      return;
    }

    this.dialogRef = this.dialog.open(DialogActionNsiComponent, {
      width: '700px',
      height: 'auto',
      data: props
    });
    this.subscription$.add(this.dialogRef.afterClosed().subscribe((value) => {
      this.dialogRef = undefined;
      dispatchAfterClosed(props.type)
        (this.store, this.route, this.router)
          (new CreateType({type: value}), new UpdateType({type: value}));
    }));
  }

  ngAfterContentInit(): void {
    const paramSubscriber = this.route.params.subscribe(params => {

      const enumAction = getEnumByStringValue(EntityNsiActionEnum, params.action) as unknown as EntityNsiActionEnum;

      const title = this.translate.get(this.getTitleWindow(enumAction));

      const propsDialogAction: DialogActionNsiProps = {
        type: enumAction,
        entity: undefined,
        titleWindow: title,
        btnTitle: this.translate.get(`ACTIONS.${(params.action as string).toUpperCase()}`),
      };

      if (enumAction !== EntityNsiActionEnum.CREATE) {
        const props = {id: params.id};

        this.store.dispatch(new GetTypeById(props));

        const getEntity = this.store.pipe(select(getById, {id: params.id})).subscribe(entity => {
          if (entity) {
            setTimeout(() =>
                this.openDialog({...propsDialogAction, entity} as DialogActionNsiProps),
              100);
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