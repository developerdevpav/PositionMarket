import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionPositionComponent} from './action-position/action-position.component';
import {ComponentCommonModule} from '../../common/component-common.module';
import {AngularMaterialModule} from '../../../angular-material.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {ActionNsiDialogComponent} from './dialogs/action-nsi-dialog/action-nsi-dialog.component';

@NgModule({
  declarations: [ActionPositionComponent, ActionNsiDialogComponent],
  imports: [
    CommonModule,
    ComponentCommonModule,
    AngularMaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    ActionPositionComponent,
    ActionNsiDialogComponent
  ],
  entryComponents: [
    ActionNsiDialogComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class ManagerComponentModule { }
