import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentLanguage = 'ru';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ru');
  }

  ngOnInit(): void {
    const language = localStorage.getItem('language');
    if ( language ) {
      this.translate.use(language);
      this.currentLanguage = language;
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    localStorage.setItem('language', this.translate.store.currentLang);
  }

}
