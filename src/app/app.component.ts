import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {SetLanguage} from './store/actions/language.actions';
import {selectTotal} from './store/reducers/selected-product.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentLanguage = 'ru';
  itemInShoppingCart = 0;

  constructor(private translate: TranslateService, private store: Store<any>) {
    this.translate.setDefaultLang('ru');
  }

  ngOnInit(): void {
    this.store.select(selectTotal).subscribe(it => this.itemInShoppingCart = it);
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
