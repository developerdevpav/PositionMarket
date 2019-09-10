import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevpavMultiLanguageInputComponent} from './components/devpav-multi-language-input/devpav-multi-language-input.component';
import {DevpavMultiLanguageTextareaComponent} from './components/devpav-multi-language-textarea/devpav-multi-language-textarea.component';
import {DevpavInputComponent} from './components/depav-input/devpav-input.component';
import {DevpavTextareaComponent} from './components/devpav-textarea/devpav-textarea.component';
import {DevpavChipComponent} from './components/devpav-chip/devpav-chip.component';
import {ThemeService} from './services/theme.service';
import {AngularMaterialModule} from '../angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {DevpavButtonComponent} from './components/devpav-button/devpav-button.component';
import {DialogAlertWarningComponent} from './dialog-alert-warning/dialog-alert-warning.component';

@NgModule({
  declarations: [
    DevpavMultiLanguageInputComponent,
    DevpavMultiLanguageTextareaComponent,
    DevpavInputComponent,
    DevpavTextareaComponent,
    DevpavChipComponent,
    DevpavButtonComponent,
    DialogAlertWarningComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    TranslateModule
  ],
  providers: [
    ThemeService
  ],
  entryComponents: [
    DialogAlertWarningComponent
  ],
  exports: [
    DevpavMultiLanguageInputComponent,
    DevpavMultiLanguageTextareaComponent,
    DevpavInputComponent,
    DevpavTextareaComponent,
    DevpavChipComponent,
    DevpavButtonComponent
  ]
})
export class SharedModule { }
