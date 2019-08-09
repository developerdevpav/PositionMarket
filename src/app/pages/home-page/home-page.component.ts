import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadRequestPositions} from '../../store/position/position.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  valueCheck = false;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new LoadRequestPositions());
  }

  eventCheck($event: boolean) {
    this.valueCheck = $event;
  }

}
