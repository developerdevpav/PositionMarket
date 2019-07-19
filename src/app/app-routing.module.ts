import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
/*import {CatalogPageComponent} from './pages/catalog-page/catalog-page.component';
import {SettingPageComponent} from './pages/setting-page/setting-page.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';*/

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
/*  { path: 'catalog', component: CatalogPageComponent },
  { path: 'settings', component: SettingPageComponent },
  { path: 'contacts', component: ContactsPageComponent },*/
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {
}
