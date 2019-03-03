import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule
  ]
})
export class AngularMaterialModule { }
