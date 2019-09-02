import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatabaseTagEntityPageComponent} from './database-tag-entity-page/database-tag-entity-page.component';
import {ContainerModule} from '../../containers/container.module';
import {DatabaseCommonPageComponent} from './database-common-page/database-common-page.component';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {DatabaseTypeEntityPageComponent} from './database-type-entity-page/database-type-entity-page.component';
import {DatabaseProductTypeEntityPageComponent} from './database-product-type-entity-page/database-product-type-entity-page.component';

@NgModule({
  declarations: [
    DatabaseTagEntityPageComponent,
    DatabaseCommonPageComponent,
    DatabaseTypeEntityPageComponent,
    DatabaseProductTypeEntityPageComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    MatButtonModule,
    RouterModule
  ]
})
export class AdminManagementModule {
}
