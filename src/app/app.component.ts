import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {ThemeService} from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              private store: Store<any>,
              private themeService: ThemeService) {
    this.translate.setDefaultLang('ru');
    this.themeService.toggleLight();
  }

  ngOnInit(): void {

  }

  toggleTheme = (theme: string) => {
    switch (theme) {
      case 'dark': this.themeService.toggleDark(); break;
      case 'light': this.themeService.toggleLight(); break;
    }
  }
}
