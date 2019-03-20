import {Component, Inject, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable, pipe} from 'rxjs';
import {NsiUI} from '../../../../ui/models';
import {ApiTagLoadAll} from '../../../../store/actions/tag.actions';
import {ApiTypeLoadAll} from '../../../../store/actions/type.actions';
import {DialogSelectionNsiComponent} from '../dialog-selection-nsi/dialog-selection-nsi.component';
import {selectTypesAreNonIds, selectTypesByIds, selectTypesByLanguage} from '../../../../store/selectors/type.selectors';
import {selectTagsAreNonIds, selectTagsByIds, selectTagsByLanguage} from '../../../../store/selectors/tag.selectors';
import {ApiAttractionLoadById, LoadAttractionById} from '../../../../store/actions/attraction.actions';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {selectPositionById} from '../../../../store/selectors/position.selectors';

@Component({
  selector: 'app-dialog-action-attraction',
  templateUrl: './dialog-action-attraction.component.html',
  styleUrls: ['./dialog-action-attraction.component.scss']
})
export class DialogActionAttractionComponent implements OnInit {

  @Input() public id;

  selectedTags$: Observable<{ id: string, title: string }[]> = Observable.create();
  selectedTypes$: Observable<{ id: string, title: string }[]> = Observable.create();

  tags$: Observable<{ id: string, title: string }[]> = Observable.create();
  types$: Observable<{ id: string, title: string }[]> = Observable.create();

  position: AttractionModel;

  constructor(public dialog: MatDialog, public store: Store<any>,
              public dialogRef: MatDialogRef<DialogActionAttractionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string }) {
  }

  openDialog(observable: Observable<{id: string, title: string}[]>, selectValues: Observable<{id: string, title: string}[]>): void {
    const dialogRef = this.dialog.open(DialogSelectionNsiComponent, {
      hasBackdrop: true,
      width: '70%',
      height: 'auto',
      data: { list: observable, selected: selectValues}
    });

    dialogRef.afterClosed();
  }

  ngOnInit() {
    this.store.dispatch(new ApiTypeLoadAll());
    this.store.dispatch(new ApiTagLoadAll());

    if ( this.data.action !== 'create' && this.data.id !== undefined ) {
      this.store.dispatch(new ApiAttractionLoadById(this.data.id));

      this.store.select(selectPositionById, {id: this.data.id }).subscribe(position => {
        this.position = position;

        if (this.position && this.position.types && this.position.types.length > 0) {
          this.selectedTypes$ = this.store.select(selectTypesByIds, this.position.types);
          this.types$ = this.store.select(selectTypesAreNonIds, this.position.types);
        }
        if (this.position && this.position.tags && this.position.tags.length > 0) {
          this.selectedTags$ = this.store.select(selectTagsByIds, this.position.tags);
          this.tags$ = this.store.select(selectTagsAreNonIds, this.position.tags);
        }
      });
    }
  }
}
