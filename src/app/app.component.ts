import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {LoadTags} from './store/tag/tag.actions';
import {LoadTypes} from './store/type/type.actions';
import {LoadProductTypes} from './store/product-type/product.type.actions';
import {LoadPositions} from './store/position/position.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService, private store: Store<any>) {
    this.translate.setDefaultLang('ru');
  }

  ngOnInit(): void {




  }

  loadTags = () => this.store.dispatch(new LoadTags());

  loadTypes = () => this.store.dispatch(new LoadTypes());

  loadProductTypes = () => this.store.dispatch(new LoadProductTypes());

  loadPositions = () => this.store.dispatch(new LoadPositions());

}
