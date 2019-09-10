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
import {DevpavInputComponent} from './shared/components/depav-input/devpav-input.component';
import {DevpavTextareaComponent} from './shared/components/devpav-textarea/devpav-textarea.component';
import {DevpavChipComponent} from './shared/components/devpav-chip/devpav-chip.component';
import {ThemeService} from './shared/services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    DevpavMultiLanguageInputComponent,
    DevpavMultiLanguageTextareaComponent,
    DevpavInputComponent,
    DevpavTextareaComponent,
    DevpavChipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
    AngularSvgIconModule,
    AngularMultiSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([
      PositionEffects,
      ProductTypeEffects,
      TagEffects,
      TypeEffects
    ]),
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
  providers: [
    ThemeService
  ],
  exports: [
    AppRoutingModule,
    BrowserModule
  ]
})
export class AppModule {
}
