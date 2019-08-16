import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateContainerComponent} from './translate-container/translate-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {AngularMaterialModule} from '../angular-material.module';
import { DialogActionNsiComponent } from './dialogs/dialog-action-nsi/dialog-action-nsi.component';
import { DialogNsiEntryComponent } from './dialog-entries/dialog-nsi-entry/dialog-nsi-entry.component';
import { TagGroupComponent } from './database/tag/tag-group/tag-group.component';
import { TagItemComponent } from './database/tag/tag-item/tag-item.component';

@NgModule({
  declarations: [
    TranslateContainerComponent,
    DialogActionNsiComponent,
    DialogNsiEntryComponent,
    TagGroupComponent,
    TagItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentCommonModule,
    AngularMaterialModule
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
