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
import {MatButtonModule, MatDialogModule, MatDividerModule, MatIconModule, MatListModule, MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { TagComponent } from './entities-ui/tag/tag.component';
import { TypeComponent } from './entities-ui/type/type.component';
import { TypeServiceComponent } from './entities-ui/type-service/type-service.component';

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
    TypeServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    AngularSvgIconModule,
    StoreModule.forFeature('types', typeReducer),
    StoreModule.forFeature('tags', tagReducer),

    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NsiModule { }
