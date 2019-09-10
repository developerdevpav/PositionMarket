import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogAlertWarningProps {
  message: string;
  title: string;
  titleBtn: string;
}

@Component({
  selector: 'app-dialog-alert-warning',
  templateUrl: './dialog-alert-warning.component.html',
  styleUrls: ['./dialog-alert-warning.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogAlertWarningComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAlertWarningComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogAlertWarningProps) {
  }

  ngOnInit() {
  }

}
