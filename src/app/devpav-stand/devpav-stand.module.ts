import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SectionComponent} from './components/section/section.component';
import {ParagraphComponent} from './components/paragraph/paragraph.component';
import {SubparagraphComponent} from './components/subparagraph/subparagraph.component';
import {DevpavStandPageComponent} from './devpav-stand-page/devpav-stand-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularMaterialModule} from '../angular-material.module';

const routes: Routes = [
  { path: '', component: DevpavStandPageComponent }
];

@NgModule({
  declarations: [
    DevpavStandPageComponent,
    SectionComponent,
    ParagraphComponent,
    SubparagraphComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DevpavStandModule { }
