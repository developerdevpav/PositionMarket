import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {SetLanguageAction} from './store/language/language.actions';
import {getCurrentLanguage} from './store/language/language.selector';
import {Language} from './store/language/language.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentLanguage = 'ru';

  constructor(private translate: TranslateService,
              private store: Store<any>,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {

    this.matIconRegistry
      .addSvgIcon(
        'success',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/success.svg')
      )
      .addSvgIcon(
        'position-contact',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/rent-contact.svg')
      )
      .addSvgIcon(
        'shop-cart',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/shop-cart.svg')
      )
      .addSvgIcon(
        'clear',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/clear.svg')
      )
      .addSvgIcon(
        'check',
        domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/check.svg')
      );
  }

  ngOnInit() {
    const language = navigator.language.substring(0, 2);

    this.translate.setDefaultLang(language);
    this.currentLanguage = language;
    this.store.select(getCurrentLanguage).subscribe((value: Language) => {
      this.currentLanguage = (value === Language.RU) ? 'en' : 'ru';
      this.translate.use(this.currentLanguage);
    });
  }

  switchLanguage(language: string) {
    this.store.dispatch(new SetLanguageAction(language));
  }

}
