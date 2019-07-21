import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  constructor(public store: Store<any>) { }

  ngOnInit() {
    console.log('ngOnInit ContactsPageComponent');
  }

}
