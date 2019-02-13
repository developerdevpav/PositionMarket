import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {typeReducer} from '../store/reducers/type.reducer';
import {tagReducer} from '../store/reducers/tag.reducer';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { EditorEntityComponent } from './editor-entity/editor-entity.component';
import { SettingComponent } from './setting/setting.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import { EntityListComponent } from './entity-list/entity-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {AppRoutingModule} from '../app-routing.module';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { TagComponent } from './entities-ui/tag/tag.component';
import { TypeComponent } from './entities-ui/type/type.component';
import { TypeServiceComponent } from './entities-ui/type-service/type-service.component';
import {languageReducer} from '../store/reducers/language.reducer';
import { ProductComponent } from './entities-ui/product/product.component';
import { AttractionComponent } from './entities-ui/attraction/attraction.component';
import {typeServiceReducer} from '../store/reducers/type-service.reducer';
import { EntitiesEditComponent } from './entities-edit/entities-edit.component';
import { DialogEditEntityComponent } from './dialog-edit-entity/dialog-edit-entity.component';

@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    EditorEntityComponent,
    SettingComponent,
    EntityListComponent,
    ShoppingCartComponent,
    TagComponent,
    TypeComponent,
    TypeServiceComponent,
    ProductComponent,
    AttractionComponent,
    EntitiesEditComponent,
    DialogEditEntityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    AngularSvgIconModule,
    StoreModule.forFeature('types', typeReducer),
    StoreModule.forFeature('tags', tagReducer),
    StoreModule.forFeature('language', languageReducer),
    StoreModule.forFeature('typeservises', typeServiceReducer),
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  entryComponents: [DialogEditEntityComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NsiModule { }
