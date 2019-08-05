import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentCommonModule} from '../common/component-common.module';
import {ListCatalogPositionComponent} from './catalog/list-catalog-position/list-catalog-position.component';
import {AngularMaterialModule} from '../../angular-material.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AvatarCarouselComponent} from './avatar-carousel/avatar-carousel.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableServicePositionComponent} from './table-service-position/table-service-position.component';
import {ItemCatalogPositionComponent} from './catalog/item-catalog-position/item-catalog-position.component';
import {ProductCatalogPanelServiceComponent} from './catalog/product-catalog-panel-service/product-catalog-panel-service.component';
import {ItemShopProductCartComponent} from './shopping-cart/item-shop-product-cart/item-shop-product-cart.component';
import {CutTextPipe} from '../../ui/pipes/cut-text.pipe';
import {ProductServiceExpansionComponent} from './catalog/product-service-expansion/product-service-expansion.component';

@NgModule({
  declarations: [
    ListCatalogPositionComponent,
    AvatarCarouselComponent,
    TableServicePositionComponent,
    ItemCatalogPositionComponent,
    ProductCatalogPanelServiceComponent,
    ItemShopProductCartComponent,
    CutTextPipe,
    ProductServiceExpansionComponent
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
    ListCatalogPositionComponent,
    AvatarCarouselComponent,
    NgxJsonViewerModule,
    TableServicePositionComponent,
    ItemCatalogPositionComponent,
    ItemShopProductCartComponent
  ],
  providers: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UsersComponentsModule { }
