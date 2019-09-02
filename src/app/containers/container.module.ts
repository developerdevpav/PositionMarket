import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateContainerComponent} from './translate-container/translate-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {AngularMaterialModule} from '../angular-material.module';
import {DialogActionNsiComponent} from './dialogs/dialog-action-nsi/dialog-action-nsi.component';
import {DialogTagEntryComponent} from './dialog-entries/dialog-nsi-entry/dialog-tag-entry.component';
import {PanelHeaderActionComponent} from './database/panel-header-action/panel-header-action.component';
import {WrapperGroupDataComponent} from './database/wrapper-group-data/wrapper-group-data.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {GroupDataComponent} from './database/group-data/group-data.component';
import {SharedModule} from '../shared/shared.module';
import {FormGroupDataComponent} from './database/form-group-data/form-group-data.component';
import {DialogTypeEntityComponent} from './dialog-entries/dialog-type-entity/dialog-type-entity.component';
import {DialogProductTypesEntityComponent} from './dialog-entries/dialog-product-service-entity/dialog-product-types-entity.component';
import {DialogProductTypeNsiComponent} from './dialogs/dialog-product-type-nsi/dialog-product-type-nsi.component';

@NgModule({
  declarations: [
    TranslateContainerComponent,
    DialogActionNsiComponent,
    DialogTagEntryComponent,
    PanelHeaderActionComponent,
    WrapperGroupDataComponent,
    GroupDataComponent,
    FormGroupDataComponent,
    DialogTypeEntityComponent,
    DialogProductTypesEntityComponent,
    DialogProductTypeNsiComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentCommonModule,
    AngularMaterialModule,
    NgxJsonViewerModule,
    SharedModule
  ],
  exports: [
    TranslateContainerComponent,
    DialogActionNsiComponent,
    DialogTagEntryComponent,
    FormGroupDataComponent
  ],
  entryComponents: [
    DialogActionNsiComponent,
    DialogTypeEntityComponent,
    DialogProductTypeNsiComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContainerModule {
}
