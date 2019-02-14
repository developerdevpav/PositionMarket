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
    id: null,
    values: [
      {
        language: Language.RU,
        value: ''
      },
      {
        language: Language.EN,
        value: ''
      }
    ]
  };

  constructor(public dialogRef: MatDialogRef<DialogEditEntityComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, object: Nsi }, public store: Store<any>) {
  }

  ngOnInit(): void {
    if (this.data.object) {
      console.log(this.data.object);
      this.nsi.id = this.data.object.id;
      this.nsi.values.forEach(valueThis => {
        const findValue = this.data.object.values.find(value => value.language === valueThis.language);
        if (findValue) {
          valueThis.value = findValue.value;
        }
      });
    }
  }

  add() {
    this.dialogRef.close({ action: this.data.action, entity: this.nsi });
  }
}
