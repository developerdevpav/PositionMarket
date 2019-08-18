import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateContainerComponent} from './translate-container/translate-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {AngularMaterialModule} from '../angular-material.module';
import {DialogActionNsiComponent} from './dialogs/dialog-action-nsi/dialog-action-nsi.component';
import {DialogNsiEntryComponent} from './dialog-entries/dialog-nsi-entry/dialog-nsi-entry.component';
import {PanelHeaderActionComponent} from './database/panel-header-action/panel-header-action.component';
import {WrapperGroupDataComponent} from './database/wrapper-group-data/wrapper-group-data.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {GroupDataComponent} from './database/group-data/group-data.component';
import {SharedModule} from '../shared/shared.module';
import {FormGroupDataComponent} from './database/form-group-data/form-group-data.component';

@NgModule({
  declarations: [
    TranslateContainerComponent,
    DialogActionNsiComponent,
    DialogNsiEntryComponent,
    PanelHeaderActionComponent,
    WrapperGroupDataComponent,
    GroupDataComponent,
    FormGroupDataComponent
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
    DialogNsiEntryComponent,
    FormGroupDataComponent
  ],
  entryComponents: [
    DialogActionNsiComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContainerModule {
}
