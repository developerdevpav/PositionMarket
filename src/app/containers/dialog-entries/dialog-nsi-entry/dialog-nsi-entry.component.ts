import { Component, OnInit } from '@angular/core';
import { DialogActionNsiComponent, DialogActionNsiProps } from '../../dialogs/dialog-action-nsi/dialog-action-nsi.component';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TagEntity } from 'src/app/store/entities/tag.entity';
import { TypeEntity } from 'src/app/store/entities/type.entity';
import { getById } from 'src/app/store/tag/tag.selectors';
import { GetTagById } from 'src/app/store/tag/tag.actions';

export enum EntityNsiActionEnum {
  EDIT = 'edit', 
  VIEW = 'view'
}

export enum EntityNsiTablesEnum {
  TAGS = 'tags', 
  TYPES = 'types'
}
@Component({
  template: ''
})
export class DialogNsiEntryComponent implements OnInit {

  subscription$: Subscription = new Subscription();

  action: string;
  table: string;
  
  dialogRef: any;

  constructor(private store: Store<any>, public dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idEntity = params['id'];
      const table = params['table'];

      this.table = table;
      this.store.dispatch(new GetTagById({ id: idEntity }));

      this.store.pipe(
        select(getById, { id: idEntity })
      ).subscribe(
        entity => {
          if (entity) {
            this.openDialog(entity)
          }
        }
      );
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  eventCheck() {
  }

  openDialog(entity: TagEntity | TypeEntity): void {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(DialogActionNsiComponent, {
        width: '700px',
        height: 'auto',
        data: {
          btnTitle: 'Save',
          titleWindow: 'Change tags',
          entity: entity
        } as DialogActionNsiProps
      });

      this.subscription$.add(this.dialogRef.componentInstance.actions.subscribe(console.log));

      this.subscription$.add(this.dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['.'], { relativeTo: this.route });
        this.dialogRef = undefined;
      }));
    }
  }

}
