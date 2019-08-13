import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Value, Nsi } from 'src/app/store/entities/abstract.entity';

export interface DialogActionNsiProps {
  btnTitle: string;
  titleWindow: string;
  entity: Nsi;
}

@Component({
  selector: 'app-dialog-action-nsi',
  templateUrl: './dialog-action-nsi.component.html',
  styleUrls: ['./dialog-action-nsi.component.scss']
})
export class DialogActionNsiComponent implements OnInit {

  props: DialogActionNsiProps;

  actions: EventEmitter<Nsi> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DialogActionNsiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogActionNsiProps) {
    this.props = this.data;
    console.log('this.data: ', this.data);
  }

  ngOnInit() {
  }

  changeValues($events: Value[]) {
    const nsi = {  ...this.props.entity, values: $events }
    this.actions.emit(nsi);
  }

}
