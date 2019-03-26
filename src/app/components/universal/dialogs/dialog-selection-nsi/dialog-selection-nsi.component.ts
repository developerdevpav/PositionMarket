import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {filter, switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-dialog-selection-nsi',
  templateUrl: './dialog-selection-nsi.component.html',
  styleUrls: ['./dialog-selection-nsi.component.scss']
})
export class DialogSelectionNsiComponent implements OnInit {

  selected: Observable<{ id: string, title: string }[]> = Observable.create();
  list$: Observable<{ id: string, title: string }[]> = Observable.create();

  textSearch = '';

  selectedBlockHidden = true;

  constructor(public dialogRef: MatDialogRef<DialogSelectionNsiComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: {
                list: Observable<{ id: string, title: string }[]>,
                selected: Observable<{ id: string, title: string }[]>
              }) {
  }

  removeById(array, id) {
    const index1 = array.findIndex((element) => {
      return element.id === id;
    });
    if (index1 >= 0 ) {
      array.splice(index1, 1);
    }
    return array;
  }

  ngOnInit() {
    this.list$ = this.data.list;
    this.selected = this.data.selected;
    this.selected.subscribe(list => this.selectedBlockHidden = list.length !== 0);
  }

  selectChips(object: {id: string, title: string}) {
    if ( object ) {
      this.selected.subscribe(list => {
        list.push(object);
        this.selectedBlockHidden = list.length !== 0;
      });

      this.list$.subscribe(list => {
        this.removeById(list, object.id);
      });
    }
  }

  removeFromSelectedChips(object: {id: string, title: string}) {
    if ( object ) {
      this.list$.subscribe(list => {
        list.push(object);
      });

      this.selected.subscribe(list => {
        this.removeById(list, object.id);
        this.selectedBlockHidden = list.length !== 0;
      });
    }
  }

}
