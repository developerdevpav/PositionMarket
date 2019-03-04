import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
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
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule
  ]
})
export class AngularMaterialModule { }
