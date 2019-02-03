import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NsiListComponent} from './components/nsi-list/nsi-list.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {EditorEntityComponent} from './components/editor-entity/editor-entity.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'nsi', component: NsiListComponent, pathMatch: 'full'},
  { path: 'catalog', component: CatalogComponent, pathMatch: 'full'},
  { path: 'administration/editor/entities', component: EditorEntityComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
