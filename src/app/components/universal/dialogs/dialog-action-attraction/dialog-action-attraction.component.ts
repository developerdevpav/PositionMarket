import {Component, Inject, Input, OnInit} from '@angular/core';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {Store} from '@ngrx/store';
import {selectAttractionById, selectTagsByLanguage, selectTypesByLanguage} from '../../../../store/selectors/selectors';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Type} from '../../../../store/models/type.model';
import {Value} from '../../../../store/models/abstract.model';
import {Tag} from '../../../../store/models/tag.model';
import {Product} from '../../../../store/models/products';
import {Observable} from 'rxjs';
import {NsiUI} from '../../../../ui/models';
import {ApiTagCreate, ApiTagLoadAll, ApiTagUpdate} from '../../../../store/actions/tag.actions';
import {ApiTypeLoadAll} from '../../../../store/actions/type.actions';
import {DialogSelectionNsiComponent} from '../dialog-selection-nsi/dialog-selection-nsi.component';

@Component({
  selector: 'app-dialog-action-attraction',
  templateUrl: './dialog-action-attraction.component.html',
  styleUrls: ['./dialog-action-attraction.component.scss']
})
export class DialogActionAttractionComponent implements OnInit {

  @Input() public id;

  tags$: Observable<NsiUI[]> = this.store.select(selectTagsByLanguage);
  types$: Observable<NsiUI[]> = this.store.select(selectTypesByLanguage);

  public attraction: AttractionModel = new class implements AttractionModel {
    id: string;
    image: string;
    link: string;
    products: Product[];
    tags: Tag[] = [];
    title: Value[] = [];
    types: Type[] = [];
  };

  constructor(public dialog: MatDialog, public store: Store<any>, public dialogRef: MatDialogRef<DialogActionAttractionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string }) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSelectionNsiComponent, {
      hasBackdrop: true,
      width: '70%',
      height: 'auto',
      data: {}
    });

    dialogRef.afterClosed();
  }

  ngOnInit() {
    this.store.dispatch(new ApiTagLoadAll());
    this.tags$ = this.store.select(selectTagsByLanguage);

    this.store.dispatch(new ApiTypeLoadAll());
    this.types$ = this.store.select(selectTypesByLanguage);

    if ( this.data.action !== 'create' && this.data.id !== undefined ) {
      this.store.select(selectAttractionById, { id: this.data.id }).subscribe(entity => {
       this.attraction = entity;
      });
    }
  }
}
