import {Component, OnInit} from '@angular/core';
import {ListItem} from 'ng-multiselect-dropdown/multiselect.model';
import {MatDialog} from '@angular/material';
import {ActionNsiDialogComponent} from '../dialogs/action-nsi-dialog/action-nsi-dialog.component';

@Component({
  selector: 'action-position',
  templateUrl: './action-position.component.html',
  styleUrls: ['./action-position.component.scss']
})
export class ActionPositionComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ActionNsiDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {

  }

  onItemSelect($event: ListItem) {
    
  }
}
