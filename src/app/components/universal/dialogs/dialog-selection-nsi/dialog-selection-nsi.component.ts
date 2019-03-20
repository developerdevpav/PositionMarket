import {Component, Inject, Input, OnInit} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-dialog-selection-nsi',
  templateUrl: './dialog-selection-nsi.component.html',
  styleUrls: ['./dialog-selection-nsi.component.scss']
})
export class DialogSelectionNsiComponent implements OnInit {

  selected: Observable<{ id: string, title: string }[]> = Observable.create();
  list$: Observable<{ id: string, title: string }[]> = Observable.create();

  constructor(public dialogRef: MatDialogRef<DialogSelectionNsiComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: {
                list: Observable<{ id: string, title: string }[]>,
                selected: Observable<{ id: string, title: string }[]>
              }) {
  }

  ngOnInit() {
    this.list$ = this.data.list;
    this.selected = this.data.selected;
  }

  selectChips(object: {id: string, title: string}) {
    if ( object ) {
      this.selected.subscribe(list => {
        list.push(object);
        console.log(list);
      });
      this.list$.subscribe(
        list => list.filter(it => it.id !== object.id)
      );
    }
  }

}
