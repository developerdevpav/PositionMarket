import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatabaseTagEntityPageComponent} from './database-tag-entity-page/database-tag-entity-page.component';
import {ContainerModule} from '../../containers/container.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    DatabaseTagEntityPageComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    RouterModule
  ]
})
export class AdminManagementModule {
}
