import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngrx/store';
import {Nsi} from '../../store/models/abstract.model';
import {Language} from '../../store/models/language.model';

@Component({
  selector: 'app-dialog-edit-entity',
  templateUrl: './dialog-edit-entity.component.html',
  styleUrls: ['./dialog-edit-entity.component.scss']
})
export class DialogEditEntityComponent implements OnInit {

  nsi: Nsi = {
    id: this.data.object,
    values: [
      {
        language: Language.EN,
        value: ''
      },
      {
        language: Language.RU,
        value: ''
      }
    ]
  };

  constructor(public dialogRef: MatDialogRef<DialogEditEntityComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {change: string, object: string}, public store: Store<any>) {}

  onNoClick(): void {
    // this.dialogRef.close({ change: this.data.change, entity: this.nsi });
  }

  ngOnInit(): void {
    this.nsi.id = this.data.object;
  }

  add() {
    this.dialogRef.close({ change: this.data.change, entity: this.nsi });
  }
}
