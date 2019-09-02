import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CatalogPageComponent} from './pages/catalog-page/catalog-page.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';
import {SettingPageComponent} from './pages/setting-page/setting-page.component';
import {UserShoppingCartComponent} from './pages/user-shopping-cart/user-shopping-cart.component';
import {DialogTagEntryComponent} from './containers/dialog-entries/dialog-nsi-entry/dialog-tag-entry.component';
import {EntityNsiActionGuard} from './helpers/guards/entity-nsi-action.guard';
import {DatabaseTagEntityPageComponent} from './pages/admin-management/database-tag-entity-page/database-tag-entity-page.component';
import {DatabaseCommonPageComponent} from './pages/admin-management/database-common-page/database-common-page.component';
import {DatabaseTypeEntityPageComponent} from './pages/admin-management/database-type-entity-page/database-type-entity-page.component';
import {DialogTypeEntityComponent} from './containers/dialog-entries/dialog-type-entity/dialog-type-entity.component';
import {DatabaseProductTypeEntityPageComponent} from './pages/admin-management/database-product-type-entity-page/database-product-type-entity-page.component';
import {DialogProductTypesEntityComponent} from './containers/dialog-entries/dialog-product-service-entity/dialog-product-types-entity.component';

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
            path: '',
            pathMatch: 'full',
            component: DatabaseCommonPageComponent
          },
          {
            path: 'tags',
            children: [
              {
                path: '',
                component: DatabaseTagEntityPageComponent,
                children: [
                  {
                    path: ':action',
                    pathMatch: 'full',
                    component: DialogTagEntryComponent
                  },
                  {
                    path: ':action/:id',
                    pathMatch: 'full',
                    component: DialogTagEntryComponent,
                    canActivate: [EntityNsiActionGuard]
                  }
                ]
              }
            ]
          },
          {
            path: 'types',
            children: [
              {
                path: '',
                component: DatabaseTypeEntityPageComponent,
                children: [
                  {
                    path: ':action',
                    pathMatch: 'full',
                    component: DialogTypeEntityComponent
                  },
                  {
                    path: ':action/:id',
                    pathMatch: 'full',
                    component: DialogTypeEntityComponent,
                    canActivate: [EntityNsiActionGuard]
                  }
                ]
              }
            ]
          },
          {
            path: 'product-types',
            children: [
              {
                path: '',
                component: DatabaseProductTypeEntityPageComponent,
                children: [
                  {
                    path: ':action',
                    pathMatch: 'full',
                    component: DialogProductTypesEntityComponent
                  },
                  {
                    path: ':action/:id',
                    pathMatch: 'full',
                    component: DialogProductTypesEntityComponent,
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
