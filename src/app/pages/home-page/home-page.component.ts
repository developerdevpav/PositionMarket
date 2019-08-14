import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadPositions } from '../../store/position/position.actions';
import { MatDialog } from '@angular/material';
import { DialogActionNsiComponent, DialogActionNsiProps } from 'src/app/containers/dialogs/dialog-action-nsi/dialog-action-nsi.component';
import { Language } from 'src/app/store/language/language.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  valueCheck = false;

  subscriptionRouteQueryParams$: Subscription = new Subscription();

  constructor(private store: Store<any>, public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {

    this.store.dispatch(new LoadPositions());
  }

  ngOnDestroy() {
    this.subscriptionRouteQueryParams$.unsubscribe();
  }

  eventCheck($event: boolean) {
    this.valueCheck = $event;
  }

  openDialog(): void {}

}
