import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateContainerComponent} from './translate-container/translate-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {AngularMaterialModule} from '../angular-material.module';
import { DialogActionNsiComponent } from './dialogs/dialog-action-nsi/dialog-action-nsi.component';

@NgModule({
  declarations: [
    TranslateContainerComponent,
    DialogActionNsiComponent
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
    DialogActionNsiComponent
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
