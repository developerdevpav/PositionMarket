import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevpavInputComponent} from './devpav-input/devpav-input.component';
import {FormsModule} from '@angular/forms';
import {DevpavExpansionPanelModule} from './devpav-panel/devpav-expansion-panel.module';
import {DevpavCardComponent} from './devpav-card/devpav-card.component';

@NgModule({
  declarations: [
    DevpavInputComponent,
    DevpavCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DevpavExpansionPanelModule
  ],
  exports: [
    DevpavInputComponent,
    DevpavExpansionPanelModule,
    DevpavCardComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentCommonModule { }
