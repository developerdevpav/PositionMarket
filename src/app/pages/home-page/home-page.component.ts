import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadPositions } from '../../store/position/position.actions';
import { MatDialog } from '@angular/material';
import { DialogActionNsiComponent, DialogActionNsiProps } from 'src/app/containers/dialogs/dialog-action-nsi/dialog-action-nsi.component';
import { Language } from 'src/app/store/language/language.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  valueCheck = false;

  constructor(private store: Store<any>, public dialog: MatDialog) { }

  ngOnInit() {
    this.store.dispatch(new LoadPositions());
  }

  eventCheck($event: boolean) {
    this.valueCheck = $event;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogActionNsiComponent, {
      width: '700px',
      height: 'auto',
      data: { 
        btnTitle: 'Save', 
        titleWindow: 'Change tags', 
        entity: { 
          id: 'fewohfuihefirheiwhfirhwefuirheuwg', 
          values: [
            {
              language: Language.RU,
              value: 'Название тега'
            },
            {
              language: Language.EN,
              value: 'Name tag'
            }
          ] 
        } 
      } as DialogActionNsiProps
    });

    dialogRef.componentInstance.actions.subscribe(console.log);

    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
    });
  }

}
