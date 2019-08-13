import { Component, OnInit } from '@angular/core';
import { DialogActionNsiComponent, DialogActionNsiProps } from '../../dialogs/dialog-action-nsi/dialog-action-nsi.component';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Language } from 'src/app/store/language/language.model';

@Component({
  selector: 'app-dialog-nsi-entry',
  templateUrl: './dialog-nsi-entry.component.html',
  styleUrls: ['./dialog-nsi-entry.component.scss']
})
export class DialogNsiEntryComponent implements OnInit {

  valueCheck = false;

  subscription$: Subscription = new Subscription();

  constructor(private store: Store<any>, public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const valueRouteQueryParam = this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
    });
    this.route.data.subscribe(data => {
      console.log(data);
    })
    console.log("it's work");
    this.subscription$.add(valueRouteQueryParam);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
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
      this.router.navigate(['.'], { relativeTo: this.route })
    });
  }


}
