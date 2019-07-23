import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from '../../material-design.module';
import {ComponentCommonModule} from '../common/component-common.module';
import {ListCatalogPositionComponent} from './catalog/list-catalog-position/list-catalog-position.component';
import {AngularMaterialModule} from '../../angular-material.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AvatarCarouselComponent} from './avatar-carousel/avatar-carousel.component';
import {ProductConverterService} from './services/product-converter.service';
import {DevpavProductCardComponent} from './catalog/devpav-product-card/devpav-product-card.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {DevpavProductTypeServiceComponent} from './catalog/devpav-product-type-service/devpav-product-type-service.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShopProductCartComponent} from './shopping-cart/shop-product-cart/shop-product-cart.component';

@NgModule({
  declarations: [
    ListCatalogPositionComponent,
    AvatarCarouselComponent,
    DevpavProductCardComponent,
    DevpavProductTypeServiceComponent,
    ShopProductCartComponent
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
    ListCatalogPositionComponent,
    AvatarCarouselComponent,
    DevpavProductCardComponent,
    NgxJsonViewerModule,
    DevpavProductTypeServiceComponent,
    ShopProductCartComponent
  ],
  providers: [
    ProductConverterService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UsersComponentsModule { }
