import {forwardRef, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {DevpavExpansionPanelModule} from '../components/common/devpav-panel/devpav-expansion-panel.module';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {CatalogPageComponent} from './catalog-page/catalog-page.component';
import {SettingPageComponent} from './setting-page/setting-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';
import {UsersComponentsModule} from '../components/users/users.module';
import {AngularMaterialModule} from '../angular-material.module';
import {UserShoppingCartComponent} from './user-shopping-cart/user-shopping-cart.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {DevpavInputComponent} from '../components/common/devpav-input/devpav-input.component';
import {ContainerModule} from '../containers/container.module';

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
    UsersComponentsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    ContainerModule,
    NgxJsonViewerModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DevpavInputComponent),
    }
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PageModule {
}
