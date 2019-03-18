import {Component, Inject, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NsiUI} from '../../../../ui/models';
import {MAT_DIALOG_DATA, MatCheckboxChange, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-selection-nsi',
  templateUrl: './dialog-selection-nsi.component.html',
  styleUrls: ['./dialog-selection-nsi.component.scss']
})
export class DialogSelectionNsiComponent implements OnInit {

  selected = [];

  @Input()
  public selectedNsi$: Observable<NsiUI[]>;
  @Input()
  public allNsi$: Observable<NsiUI[]>;

  isEntering = false;

  constructor(public dialogRef: MatDialogRef<DialogSelectionNsiComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { action: string, id: string }) { }

  ngOnInit() {
  }

  checkboxEvent($event, uuid: string) {
    if ( $event.checked ) {
      this.selected.push(uuid);
    } else {
      this.selected = this.selected.filter(it => it !== uuid);
    }
    console.log(`uuid: ${uuid} checked: ${$event.checked} selected: ${this.selected}`);
  }

  entering($event: boolean) {
    this.isEntering = $event;
    if ( !this.isEntering ) {
      this.selected = [];
    }
  }
}
