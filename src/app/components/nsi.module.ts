import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {typeReducer} from '../store/reducers/type.reducer';
import {tagReducer} from '../store/reducers/tag.reducer';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
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
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { TagComponent } from './setting-components/entities-ui/tag/tag.component';
import { TypeComponent } from './setting-components/entities-ui/type/type.component';
import { TypeServiceComponent } from './setting-components/entities-ui/type-service/type-service.component';
import {languageReducer} from '../store/reducers/language.reducer';
import { ProductComponent } from './setting-components/entities-ui/product/product.component';
import { AttractionComponent } from './setting-components/entities-ui/attraction/attraction.component';
import {typeServiceReducer} from '../store/reducers/type-service.reducer';
import { EntitiesEditComponent } from './entities-edit/entities-edit.component';
import { DialogEditEntityComponent } from './dialog-edit-entity/dialog-edit-entity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { AttractionActionComponent } from './setting-components/attraction-action/attraction-action.component';
import {attractionReducer} from '../store/reducers/attraction.reducer';

@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    SettingComponent,
    EntityListComponent,
    ShoppingCartComponent,
    TagComponent,
    TypeComponent,
    TypeServiceComponent,
    ProductComponent,
    AttractionComponent,
    EntitiesEditComponent,
    DialogEditEntityComponent,
    UserListComponent,
    AttractionActionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AngularSvgIconModule,
    StoreModule.forFeature('types', typeReducer),
    StoreModule.forFeature('attractions', attractionReducer),
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
