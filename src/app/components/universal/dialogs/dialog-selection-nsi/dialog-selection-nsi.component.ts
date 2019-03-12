import {Component, Inject, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NsiUI} from '../../../../ui/models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-selection-nsi',
  templateUrl: './dialog-selection-nsi.component.html',
  styleUrls: ['./dialog-selection-nsi.component.scss']
})
export class DialogSelectionNsiComponent implements OnInit {

  @Input()
  public selectedNsi$: Observable<NsiUI[]>;

  @Input()
  public allNsi$: Observable<NsiUI[]>;

  constructor(public dialogRef: MatDialogRef<DialogSelectionNsiComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string }) { }

  ngOnInit() {
  }

}
