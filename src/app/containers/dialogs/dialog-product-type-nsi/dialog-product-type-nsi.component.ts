import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {Nsi} from '../../../store/entities/abstract.entity';

export interface DialogActionNsiProps {
  btnTitle: Observable<string>;
  titleWindow: Observable<string>;
  entity: Nsi;
  type: string;
}

@Component({
  selector: 'app-dialog-product-type-nsi',
  templateUrl: './dialog-product-type-nsi.component.html',
  styleUrls: ['./dialog-product-type-nsi.component.scss']
})
export class DialogProductTypeNsiComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogProductTypeNsiComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

}
