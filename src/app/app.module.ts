import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {httpLoaderFactory} from './config/translate.config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {PositionEffects} from './store/position/position.effects';
import {ProductTypeEffects} from './store/product-type/product-type.effects';
import {TagEffects} from './store/tag/tag.effects';
import {TypeEffects} from './store/type/type.effects';
import {DevpavMultiLanguageInputComponent} from './shared/components/devpav-multi-language-input/devpav-multi-language-input.component';
// tslint:disable-next-line:max-line-length
import {DevpavMultiLanguageTextareaComponent} from './shared/components/devpav-multi-language-textarea/devpav-multi-language-textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    DevpavMultiLanguageInputComponent,
    DevpavMultiLanguageTextareaComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    AngularMultiSelectModule,
    EffectsModule.forRoot([
      PositionEffects,
      ProductTypeEffects,
      TagEffects,
      TypeEffects
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: [
    AppRoutingModule,
    BrowserModule
  ]
})
export class AppModule {
}
