import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngrx/store';
import {Language} from '../../../../store/models/language.model';

@Component({
  selector: 'app-dialog-edit-entity',
  templateUrl: './dialog-edit-entity.component.html',
  styleUrls: ['./dialog-edit-entity.component.scss']
})
export class DialogEditEntityComponent implements OnInit {

  nsi = {
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
    ],
    description: [
      {
        language: Language.RU,
        value: ''
      },
      {
        language: Language.EN,
        value: ''
      }
    ],
    type: ''
  };

  isTypeService = false;

  types = [
    {
      title: 'RENT'
    },
    {title: 'DELIVERY'},
    {title: 'PERSONAL'}
  ];

  selectedService: {
    title: string
  }[] = [];

  settings = {
    singleSelection: true,
    text: 'Select Country',
    primaryKey: 'title',
    classes: 'input-multi-select',
    labelKey: 'title'
  };

  constructor(public dialogRef: MatDialogRef<DialogEditEntityComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, object: any, type: string },
              public store: Store<any>) {
    this.isTypeService = this.data.type === 'typeService';
  }

  ngOnInit(): void {
    if (this.data.object) {
      this.nsi.id = this.data.object.id;
      this.nsi.values.forEach(valueThis => {
        const findValue = this.data.object.values.find(value => value.language === valueThis.language);
        if (findValue) {
          valueThis.value = findValue.value;
        }
      });
      if (this.isTypeService) {
        this.nsi.description.forEach(valueThis => {
          const findValue = this.data.object.description.find(value => value.language === valueThis.language);
          if (findValue) {
            valueThis.value = findValue.value;
          }
        });
        if (this.data.object.type) {
          this.nsi.type = this.data.object.type;
          this.selectedService[0] = {title: this.nsi.type};
        }
      }
    }
  }

  add() {
    if (this.isTypeService) {
      this.nsi.type = this.selectedService[0].title;
      console.log(this.nsi);
    }
    this.dialogRef.close({action: this.data.action, entity: this.nsi});
  }
}
