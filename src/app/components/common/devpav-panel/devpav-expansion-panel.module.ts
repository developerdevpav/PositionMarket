import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevpavExpansionPanelComponent} from './devpav-expansion-panel/devpav-expansion-panel.component';
import {DevpavExpansionPanelHeaderComponent} from './devpav-expansion-panel-header/devpav-expansion-panel-header.component';
import {DevpavExpansionPanelHeaderAvatarComponent} from './devpav-expansion-panel-header-avatar/devpav-expansion-panel-header-avatar.component';
import {DevpavExpansionPanelHeaderTitleComponent} from './devpav-expansion-panel-header-title/devpav-expansion-panel-header-title.component';
import {DevpavExpansionPanelHeaderActionComponent} from './devpav-expansion-panel-header-action/devpav-expansion-panel-header-action.component';
import {DevpavExpansionPanelContentComponent} from './devpav-expansion-panel-content/devpav-expansion-panel-content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DevpavExpansionPanelComponent,
    DevpavExpansionPanelHeaderComponent,
    DevpavExpansionPanelHeaderAvatarComponent,
    DevpavExpansionPanelHeaderTitleComponent,
    DevpavExpansionPanelHeaderActionComponent,
    DevpavExpansionPanelContentComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    DevpavExpansionPanelComponent,
    DevpavExpansionPanelHeaderComponent,
    DevpavExpansionPanelHeaderAvatarComponent,
    DevpavExpansionPanelHeaderTitleComponent,
    DevpavExpansionPanelHeaderActionComponent,
    DevpavExpansionPanelContentComponent
  ]
})
export class DevpavExpansionPanelModule { }
