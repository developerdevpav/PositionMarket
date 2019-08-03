import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionPositionComponent} from './action-position/action-position.component';
import {ComponentCommonModule} from '../../common/component-common.module';
import {AngularMaterialModule} from '../../../angular-material.module';

@NgModule({
  declarations: [ActionPositionComponent],
  imports: [
    CommonModule,
    ComponentCommonModule,
    AngularMaterialModule
  ],
  exports: [
    ActionPositionComponent
  ]
})
export class ManagerComponentModule { }
