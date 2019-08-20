import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CatalogPageComponent} from './pages/catalog-page/catalog-page.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';
import {SettingPageComponent} from './pages/setting-page/setting-page.component';
import {UserShoppingCartComponent} from './pages/user-shopping-cart/user-shopping-cart.component';
import {DialogNsiEntryComponent} from './containers/dialog-entries/dialog-nsi-entry/dialog-nsi-entry.component';
import {EntityNsiActionGuard} from './helpers/guards/entity-nsi-action.guard';
import {DatabaseTagEntityPageComponent} from './pages/admin-management/database-tag-entity-page/database-tag-entity-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'catalog', component: CatalogPageComponent},
  {
    path: 'settings',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SettingPageComponent
      },
      {
        path: 'database',
        children: [
          {
            path: 'tags',
            children: [
              {
                path: '',
                component: DatabaseTagEntityPageComponent,
                children: [
                  {
                    path: ':action/:id',
                    pathMatch: 'full',
                    component: DialogNsiEntryComponent,
                    canActivate: [EntityNsiActionGuard]
                  }
                ]
              }
            ]
          }
        ]
      },

    ]
  },
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'cart', component: UserShoppingCartComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {
}
