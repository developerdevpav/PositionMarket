import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Nsi, Value} from 'src/app/store/entities/abstract.entity';
import {Observable} from 'rxjs';

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
  entity: Nsi = { id: undefined, values: [] };

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
    this.entity = { ...this.props.entity, values: $events };
    this.actions.emit(this.entity);
  }

  onAction() {
    this.dialogRef.close({ ...this.entity });
  }
}
