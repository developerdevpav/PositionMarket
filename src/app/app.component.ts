import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {SetLanguage} from './store/actions/language.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentLanguage = 'ru';

  constructor(private translate: TranslateService, private store: Store<any>) {
    this.translate.setDefaultLang('ru');
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
