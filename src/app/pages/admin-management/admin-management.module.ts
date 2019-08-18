import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatabaseTagEntityPageComponent} from './database-tag-entity-page/database-tag-entity-page.component';
import {ContainerModule} from '../../containers/container.module';

@NgModule({
  declarations: [
    DatabaseTagEntityPageComponent
  ],
  imports: [
    CommonModule,
    ContainerModule
  ]
})
export class AdminManagementModule {
}
