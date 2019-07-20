import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './ui/translate.service';
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    AngularSvgIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule,
    MatCheckboxModule,
    MatIconModule,
    AngularSvgIconModule
  ]
})
export class MaterialDesignModule { }
