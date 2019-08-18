import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransformObservableToItemSelectPipe} from '../helpers/pipes/transform-observeble-to-item-select.pipe';
import {NsiConverterService} from '../helpers/services/nsi.converter.service';

@NgModule({
  declarations: [
    TransformObservableToItemSelectPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TransformObservableToItemSelectPipe
  ],
  providers: [
    NsiConverterService
  ]
})
export class SharedModule { }
