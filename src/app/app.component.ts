import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {SetLanguage} from './store/actions/language.actions';
import {selectTotal} from './store/reducers/selected-product.reducer';
import {Observable} from 'rxjs';
import {SelectedProduct} from './store/models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentLanguage = 'ru';
  itemInShoppingCart: Observable<number> = this.store.select(selectTotal);
  constructor(private translate: TranslateService, private store: Store<any>) {
    this.translate.setDefaultLang('ru');
  }

  public converter(map: Map<string, {total: number, products: SelectedProduct[]}>) {
    return JSON.stringify(map);
  }

  ngOnInit(): void {
    const language = localStorage.getItem('language');
    if ( language ) {
      this.translate.use(language);
      this.currentLanguage = language;
      this.store.dispatch(new SetLanguage(language));
    } else {
      localStorage.setItem('language', this.translate.store.currentLang);
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.store.dispatch(new SetLanguage(language));
    localStorage.setItem('language', this.translate.store.currentLang);
  }

}
