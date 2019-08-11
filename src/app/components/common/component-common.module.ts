import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevpavInputComponent} from './devpav-input/devpav-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DevpavExpansionPanelModule} from './devpav-panel/devpav-expansion-panel.module';
import {DevpavCardComponent} from './devpav-card/devpav-card.component';
import {DevpavButtonComponent} from './devpav-button/devpav-button.component';
import {DevpavRefPanelComponent} from './devpav-ref-panel/devpav-ref-panel.component';
import {DevpavInformationPanelComponent} from './devpav-information-panel/devpav-information-panel.component';
import {AngularMaterialModule} from '../../angular-material.module';
import {DevpavSelectorComponent} from './devpav-selector/devpav-selector.component';

@NgModule({
  declarations: [
    DevpavInputComponent,
    DevpavCardComponent,
    DevpavButtonComponent,
    DevpavRefPanelComponent,
    DevpavInformationPanelComponent,
    DevpavSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DevpavExpansionPanelModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    DevpavInputComponent,
    DevpavExpansionPanelModule,
    DevpavCardComponent,
    DevpavButtonComponent,
    DevpavRefPanelComponent,
    DevpavInformationPanelComponent,
    DevpavSelectorComponent
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentCommonModule {
}
