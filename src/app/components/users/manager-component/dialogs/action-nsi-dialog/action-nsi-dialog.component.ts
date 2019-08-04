import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-action-nsi-dialog',
  templateUrl: './action-nsi-dialog.component.html',
  styleUrls: ['./action-nsi-dialog.component.scss']
})
export class ActionNsiDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
