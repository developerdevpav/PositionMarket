import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from '../../material-design.module';
import {ComponentCommonModule} from '../common/component-common.module';
import {DevpavCatalogServiceDescriptionComponent} from './devpav-catalog-service-description/devpav-catalog-service-description.component';
import {ListCatalogPositionComponent} from './list-catalog-position/list-catalog-position.component';
import {ListServiceOfPositionComponent} from './list-service-of-position/list-service-of-position.component';
import {ItemServiceOfPositionComponent} from './item-service-of-position/item-service-of-position.component';
import {AngularMaterialModule} from '../../angular-material.module';
import {ItemTypeServicePositionComponentComponent} from './item-type-service-position-component/item-type-service-position-component.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AvatarCarouselComponent} from './avatar-carousel/avatar-carousel.component';
import {ProductConverterService} from './services/product-converter.service';
import {DevpavProductCardComponent} from './catalog/devpav-product-card/devpav-product-card.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {DevpavProductTypeServiceComponent} from './catalog/devpav-product-type-service/devpav-product-type-service.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DevpavCatalogServiceDescriptionComponent,
    ListCatalogPositionComponent,
    ListServiceOfPositionComponent,
    ItemServiceOfPositionComponent,
    ItemTypeServicePositionComponentComponent,
    AvatarCarouselComponent,
    DevpavProductCardComponent,
    DevpavProductTypeServiceComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ComponentCommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    BrowserModule,
    NgxJsonViewerModule
  ],
  exports: [
    DevpavCatalogServiceDescriptionComponent,
    ListCatalogPositionComponent,
    ListServiceOfPositionComponent,
    ItemServiceOfPositionComponent,
    ItemTypeServicePositionComponentComponent,
    AvatarCarouselComponent,
    DevpavProductCardComponent,
    NgxJsonViewerModule,
    DevpavProductTypeServiceComponent
  ],
  providers: [
    ProductConverterService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UsersComponentsModule { }
