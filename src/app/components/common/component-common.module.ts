import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevpavInputComponent} from './devpav-input/devpav-input.component';
import {FormsModule} from '@angular/forms';
import {DevpavExpansionPanelModule} from './devpav-panel/devpav-expansion-panel.module';
import {DevpavCardComponent} from './devpav-card/devpav-card.component';
import {DevpavCheckboxComponent} from './devpav-checkbox/devpav-checkbox.component';
import {DevpavButtonComponent} from './devpav-button/devpav-button.component';
import {MaterialDesignModule} from '../../material-design.module';

@NgModule({
  declarations: [
    DevpavInputComponent,
    DevpavCardComponent,
    DevpavCheckboxComponent,
    DevpavButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DevpavExpansionPanelModule,
    MaterialDesignModule
  ],
  exports: [
    DevpavInputComponent,
    DevpavExpansionPanelModule,
    DevpavCardComponent,
    DevpavCheckboxComponent,
    DevpavButtonComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentCommonModule { }
