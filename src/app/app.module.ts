import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as storeReducers from './store';
import {EffectsModule} from '@ngrx/effects';
import {NsiAbstractService} from './store/services/nsi.abstract.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PositionService} from './store/services/position.service';
import {AngularMaterialModule} from './angular-material.module';
import {ImageUtilService} from './store/services/utils/image-util.service';
import {TranslatorYandexService} from './store/services/translator-yandex.service';
import {ComponentCommonModule} from './components/common/component-common.module';
import {PageModule} from './pages/page.module';
import {PositionEffects} from './store/position/position.effects';
import {ProductTypeEffects} from './store/product-type/product-type.effects';
import {TypeEffects} from './store/type/type.effects';
import {TagEffects} from './store/tag/tag.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ComponentCommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot(storeReducers.reducers),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    PageModule,
    EffectsModule.forRoot([
      PositionEffects,
      ProductTypeEffects,
      TypeEffects,
      TagEffects
    ]),
    PageModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    NsiAbstractService,
    PositionService,
    ImageUtilService,
    TranslatorYandexService
  ],
  exports: [
  ]
})
export class AppModule {
}
