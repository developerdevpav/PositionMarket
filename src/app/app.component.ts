import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {SetLanguage} from './store/actions/language.actions';
import {getCountProductSelected} from './store/selectors/selected.product.selectors';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentLanguage = 'ru';
  countProduct = this.store.select(getCountProductSelected);

  constructor(private translate: TranslateService, private store: Store<any>,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    const language = navigator.language.substring(0, 2);
    this.translate.setDefaultLang(language);
    this.currentLanguage = language;
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

  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.store.dispatch(new SetLanguage(language));
    localStorage.setItem('language', this.translate.store.currentLang);
  }

}
