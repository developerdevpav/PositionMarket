import { Component, OnInit } from '@angular/core';
import { DialogActionNsiComponent, DialogActionNsiProps } from '../../dialogs/dialog-action-nsi/dialog-action-nsi.component';
import { Store, select } from '@ngrx/store';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Language } from 'src/app/store/language/language.model';
import { TagEntity } from 'src/app/store/entities/tag.entity';
import { TypeEntity } from 'src/app/store/entities/type.entity';
import { Nsi } from 'src/app/store/entities/abstract.entity';
import { getById, selectIsLoading, selectError } from 'src/app/store/tag/tag.selectors';
import { GetTagById } from 'src/app/store/tag/tag.actions';
import { switchMap, map, filter, tap } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/range';

@Component({
  template: ''
})
export class DialogNsiEntryComponent implements OnInit {

  valueCheck = false;

  entity: TagEntity | TypeEntity;

  paramId: string;

  subscription$: Subscription = new Subscription();

  dialogRef: any;

  constructor(private store: Store<any>, public dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {


    /* 
        this.store.select(selectIsLoading).subscribe(loading => {
          console.log(loading);
        })
    
        this.store.select(selectError).subscribe(error => {
          console.log(error);
        }) */

    /*  const valueEntity = this.store.pipe(select(getById, { id: param['id'] })).subscribe(value => {
       if (value) {
         this.openDialog(value);
       }
     }); */

    this.route.params.pipe(
      filter(value => !!value),
      filter(value => value['id']),
      map(params => params['id']),
      tap((idEntity: string) => this.store.dispatch(new GetTagById({ id: idEntity })))
    ).subscribe(
      value => this.store.select(getById, { id: value }).subscribe(
        it => {
          if (it) {
            this.openDialog(it)
          }
        },
        (err) => console.log(value),
        () => console.log('complete')
      )
    );

    //this.openDialog(this.entity);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  eventCheck($event: boolean) {
    this.valueCheck = $event;
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

      /*     this.subscription$.add(dialogRef.componentInstance.actions.subscribe(console.log)); */

      this.subscription$.add(this.dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['.'], { relativeTo: this.route })
        this.dialogRef = undefined;
      }));
    }
  }

}
