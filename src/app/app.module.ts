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
import {TypeEffects} from './store/effects/type.effects';
import {NsiAbstractService} from './store/services/nsi.abstract.service';
import {TagEffects} from './store/effects/tag.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TypeServiceEffects} from './store/effects/type-service.effects';
import {AttractionService} from './store/services/attraction.service';
import {AttractionEffects} from './store/effects/attraction.effects';
import {AngularMaterialModule} from './angular-material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {ImageEffects} from './store/effects/image.effects';
import {ImageUtilService} from './store/services/utils/image-util.service';
import {TranslatorYandexService} from './store/services/translator-yandex.service';
import {ComponentCommonModule} from './components/common/component-common.module';
import {PageModule} from './pages/page.module';
import {MaterialDesignModule} from './material-design.module';

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
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    PageModule,
    AngularMultiSelectModule,
    EffectsModule.forRoot([
      TypeEffects,
      TagEffects,
      TypeServiceEffects,
      AttractionEffects,
      ImageEffects
    ]),
    PageModule,
    HttpClientModule,
    MaterialDesignModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    NsiAbstractService,
    AttractionService,
    ImageUtilService,
    TranslatorYandexService
  ],
  exports: [
  ]
})
export class AppModule {
}
