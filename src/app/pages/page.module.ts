import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {DevpavExpansionPanelModule} from '../components/common/devpav-panel/devpav-expansion-panel.module';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {CatalogPageComponent} from './catalog-page/catalog-page.component';
import {SettingPageComponent} from './setting-page/setting-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';
import {NgxPrettyCheckboxModule} from 'ngx-pretty-checkbox';
import {IgxAvatarModule} from 'igniteui-angular';

@NgModule({
  declarations: [
    HomePageComponent,
    CatalogPageComponent,
    SettingPageComponent,
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    DevpavExpansionPanelModule,
    ComponentCommonModule,
    NgxPrettyCheckboxModule,
    IgxAvatarModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PageModule {
}
