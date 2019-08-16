import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentCommonModule} from '../common/component-common.module';
import {AngularMaterialModule} from '../../angular-material.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AvatarCarouselComponent} from './avatar-carousel/avatar-carousel.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AvatarCarouselComponent
  ],
  imports: [
    CommonModule,
    ComponentCommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    BrowserModule,
    NgxJsonViewerModule
  ],
  exports: [
    AvatarCarouselComponent,
    NgxJsonViewerModule
  ],
  providers: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UsersComponentsModule { }
