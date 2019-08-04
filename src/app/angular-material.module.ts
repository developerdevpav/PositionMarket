import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [],
  imports: [
    MatProgressBarModule,
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
    MatDividerModule,
    MatSnackBarModule,
    AngularSvgIconModule,
    MatTableModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    MatProgressBarModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    AngularSvgIconModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTableModule,
    NgMultiSelectDropDownModule
  ]
})
export class AngularMaterialModule {

}
