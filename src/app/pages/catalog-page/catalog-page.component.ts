import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {

  }

}
