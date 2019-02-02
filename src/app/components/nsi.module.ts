import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NsiListComponent } from './nsi-list/nsi-list.component';
import {StoreModule} from '@ngrx/store';
import {typeReducer} from '../store/reducers/type.reducer';
import {tagReducer} from '../store/reducers/tag.reducer';
import { NsiEditorComponent } from './nsi-editor/nsi-editor.component';

@NgModule({
  declarations: [
    NsiListComponent,
    NsiEditorComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('types', typeReducer),
    StoreModule.forFeature('tags', tagReducer)
  ],
  exports: [NsiListComponent]
})
export class NsiModule { }
