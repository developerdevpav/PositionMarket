import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {DevpavExpansionPanelModule} from '../components/common/devpav-panel/devpav-expansion-panel.module';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {CatalogPageComponent} from './catalog-page/catalog-page.component';
import {SettingPageComponent} from './setting-page/setting-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';
import {MaterialDesignModule} from '../material-design.module';
import {UsersComponentsModule} from '../components/users/users.module';
import {AngularMaterialModule} from '../angular-material.module';
import {UserShoppingCartComponent} from './user-shopping-cart/user-shopping-cart.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CatalogPageComponent,
    SettingPageComponent,
    ContactsPageComponent,
    UserShoppingCartComponent
  ],
  imports: [
    CommonModule,
    DevpavExpansionPanelModule,
    ComponentCommonModule,
    MaterialDesignModule,
    UsersComponentsModule,
    AngularMaterialModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PageModule {
}
