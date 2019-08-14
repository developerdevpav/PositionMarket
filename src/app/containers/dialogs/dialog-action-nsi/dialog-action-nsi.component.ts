import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Value, Nsi } from 'src/app/store/entities/abstract.entity';
import { Observable } from 'rxjs';
import { EntityNsiActionEnum } from '../../dialog-entries/dialog-nsi-entry/dialog-nsi-entry.component';

export interface DialogActionNsiProps {
  btnTitle: Observable<string>;
  titleWindow: Observable<string>;
  entity: Nsi;
  type: string;
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
    
  }

  ngOnInit() {
    this.props = this.data;
  }

  isView() {
    return this.props.type === 'view';
  }

  changeValues($events: Value[]) {
    this.actions.emit({ ...this.props.entity, values: $events });
  }

}
