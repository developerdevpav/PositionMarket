import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    EditorEntityComponent,
    SettingComponent,
    EntityListComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    StoreModule.forFeature('types', typeReducer),
    StoreModule.forFeature('tags', tagReducer)
  ],
  exports: []
})
export class NsiModule { }
