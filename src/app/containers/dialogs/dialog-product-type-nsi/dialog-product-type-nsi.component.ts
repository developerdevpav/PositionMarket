import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-product-type-nsi',
  templateUrl: './dialog-product-type-nsi.component.html',
  styleUrls: ['./dialog-product-type-nsi.component.scss']
})
export class DialogProductTypeNsiComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogProductTypeNsiComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
