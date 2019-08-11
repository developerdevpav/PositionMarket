import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateContainerComponent} from './translate-container/translate-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentCommonModule} from '../components/common/component-common.module';
import {AngularMaterialModule} from '../angular-material.module';

@NgModule({
  declarations: [
    TranslateContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentCommonModule,
    AngularMaterialModule
  ],
  exports: [
    TranslateContainerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContainerModule {
}
