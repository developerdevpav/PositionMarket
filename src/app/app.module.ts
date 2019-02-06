import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NsiModule} from './components/nsi.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as storeReducers from './store';
import {EffectsModule} from '@ngrx/effects';
import {TypeEffects} from './store/effects/type.effects';
import {NsiAbstractService} from './store/services/nsi.abstract.service';
import {AngularSvgIconModule} from 'angular-svg-icon';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpLoaderFactory} from './ui/translate.service';
import {TagEffects} from './store/effects/tag.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(storeReducers.reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AngularSvgIconModule,
    EffectsModule.forRoot([TypeEffects, TagEffects]),
    NsiModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [NsiAbstractService]
})
export class AppModule { }
