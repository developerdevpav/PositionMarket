import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {EntityListComponent} from './components/entity-list/entity-list.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'catalog', component: CatalogComponent, pathMatch: 'full'},
  { path: 'settings', component: EntityListComponent, pathMatch: 'full'},
  { path: 'shopping-cart', component: ShoppingCartComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
