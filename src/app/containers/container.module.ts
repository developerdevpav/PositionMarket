import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateContainerComponent} from './translate-container/translate-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {AngularMaterialModule} from '../angular-material.module';
import {DialogActionNsiComponent} from './dialogs/dialog-action-nsi/dialog-action-nsi.component';
import {DialogNsiEntryComponent} from './dialog-entries/dialog-nsi-entry/dialog-nsi-entry.component';
import {TagGroupComponent} from './database/tag/tag-group/tag-group.component';
import {TagItemComponent} from './database/tag/tag-item/tag-item.component';
import {ItemSelectPanelComponent} from './item-select-panel/item-select-panel.component';
import {PanelHeaderActionComponent} from './database/panel-header-action/panel-header-action.component';
import {WrapperGroupDataComponent} from './database/wrapper-group-data/wrapper-group-data.component';
import {NgxJsonViewerModule} from "ngx-json-viewer";

@NgModule({
  declarations: [
    TranslateContainerComponent,
    DialogActionNsiComponent,
    DialogNsiEntryComponent,
    TagGroupComponent,
    TagItemComponent,
    ItemSelectPanelComponent,
    PanelHeaderActionComponent,
    WrapperGroupDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentCommonModule,
    AngularMaterialModule,
    NgxJsonViewerModule
  ],
  exports: [
    TranslateContainerComponent,
    DialogActionNsiComponent,
    DialogNsiEntryComponent
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
