import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {typeReducer} from '../store/reducers/type.reducer';
import {tagReducer} from '../store/reducers/tag.reducer';
import {HomeComponent} from './home/home.component';
import {CatalogComponent} from './catalog/catalog.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {TagComponent} from './setting-components/entities-ui/tag/tag.component';
import {TypeComponent} from './setting-components/entities-ui/type/type.component';
import {TypeServiceComponent} from './setting-components/entities-ui/type-service/type-service.component';
import {languageReducer} from '../store/reducers/language.reducer';
import {AttractionComponent} from './setting-components/entities-ui/attraction/attraction.component';
import {typeServiceReducer} from '../store/reducers/type-service.reducer';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {attractionReducer} from '../store/reducers/attraction.reducer';
import {PanelEntityComponent} from './universal/panel-entity/panel-entity.component';
import {DialogEditEntityComponent} from './universal/dialogs/dialog-edit-entity/dialog-edit-entity.component';
import {EntityListComponent} from './universal/entity-list/entity-list.component';
import {SettingComponent} from './setting-components/setting/setting.component';
import {SearchLineComponent} from './universal/search-line/search-line.component';
import {DialogActionAttractionComponent} from './universal/dialogs/dialog-action-attraction/dialog-action-attraction.component';
import {EntityChipActionComponent} from './universal/entity-chip-action/entity-chip-action.component';
import {DataBaseComponent} from './setting-components/data-base/data-base.component';
import { DialogSelectionNsiComponent } from './universal/dialogs/dialog-selection-nsi/dialog-selection-nsi.component';
import { ItemListWithTitleAndCheckboxComponent }
from './universal/item-list-with-title-and-checkbox/item-list-with-title-and-checkbox.component';
import {AngularMaterialModule} from '../angular-material.module';
import { FilterObservablePipe } from './pipes/filter-observable.pipe';

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
    AttractionComponent,
    DialogEditEntityComponent,
    PanelEntityComponent,
    SearchLineComponent,
    DialogActionAttractionComponent,
    EntityChipActionComponent,
    DataBaseComponent,
    DialogSelectionNsiComponent,
    ItemListWithTitleAndCheckboxComponent,
    FilterObservablePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AngularSvgIconModule,
    StoreModule.forFeature('types', typeReducer),
    StoreModule.forFeature('attractions', attractionReducer),
    StoreModule.forFeature('tags', tagReducer),
    StoreModule.forFeature('language', languageReducer),
    StoreModule.forFeature('typeservises', typeServiceReducer)
  ],
  entryComponents: [DialogEditEntityComponent, DialogActionAttractionComponent, DialogSelectionNsiComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NsiModule {
}
