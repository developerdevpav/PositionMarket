import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatSelectModule, MatCardModule
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
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule {

}
