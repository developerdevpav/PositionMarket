import {AfterContentInit, Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {DialogActionNsiProps} from '../../dialogs/dialog-action-nsi/dialog-action-nsi.component';
import {CreateType, UpdateType} from '../../../store/type/type.actions';
import {getEnumByStringValue} from '../../../helpers/util/guard.util';
import {select, Store} from '@ngrx/store';
import {getById} from '../../../store/product-type/product.type.selectors';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {dispatchAfterClosed} from '../dialog.entity.util';
import {DialogProductTypeNsiComponent} from '../../dialogs/dialog-product-type-nsi/dialog-product-type-nsi.component';
import {LoadProductType} from '../../../store/product-type/product.type.actions';

export enum EntityNsiActionEnum { EDIT = 'edit', VIEW = 'view', CREATE = 'create' }

export enum EntityNsiTablesEnum { TAGS = 'tags', TYPES = 'types' }

@Component({template: ''})
export class DialogProductTypesEntityComponent implements AfterContentInit {

  subscription$: Subscription = new Subscription();

  action: string;

  dialogRef: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private translate: TranslateService,
              private store: Store<any>) {
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

    const matDialogConfig: MatDialogConfig = {
      width: '700px',
      height: 'auto',
      data: props
    };

    this.dialogRef = this.dialog.open(DialogProductTypeNsiComponent, matDialogConfig);

    const subscriberCloseDialog = this.dialogRef.afterClosed().subscribe((value) => {
      this.dialogRef = undefined;

      dispatchAfterClosed(props.type)
      (this.store, this.route, this.router)
      (new CreateType({type: value}), new UpdateType({type: value}));
    });

    this.subscription$.add(subscriberCloseDialog);
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
        this.store.dispatch(new LoadProductType( {id: params.id} ));

        const subscriberGetEntity = this.store.pipe(select(getById, {id: params.id})).subscribe(entity => {
          if (entity) {
            setTimeout(() => this.openDialog({...propsDialogAction, entity} as DialogActionNsiProps), 100);
          }
        });
        this.subscription$.add(subscriberGetEntity);
      } else {
        setTimeout(() => this.openDialog(propsDialogAction), 100);
      }
    });

    this.subscription$.add(paramSubscriber);
  }
}
