import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {TagComponent} from './components/setting-components/entities-ui/tag/tag.component';
import {TypeComponent} from './components/setting-components/entities-ui/type/type.component';
import {TypeServiceComponent} from './components/setting-components/entities-ui/type-service/type-service.component';
import {AttractionComponent} from './components/setting-components/entities-ui/attraction/attraction.component';
import {SettingComponent} from './components/setting-components/setting/setting.component';
import {DataBaseComponent} from './components/setting-components/data-base/data-base.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent, pathMatch: 'full'},
  {
    path: 'settings',
    component: SettingComponent,
    children: [
      {
        path: '',
        redirectTo: 'database',
        pathMatch: 'full'
      },
      {
        path: 'database',
        component: DataBaseComponent,
        children: [
          {
            path: '',
            redirectTo: 'tag',
            pathMatch: 'full'
          },
          {
            path: 'tag',
            component: TagComponent
          },
          {
            path: 'attraction',
            component: AttractionComponent
          },
          {
            path: 'type',
            component: TypeComponent
          },
          {
            path: 'type-service',
            component: TypeServiceComponent
          }
        ],
      }
    ]
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {
}
