import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {EntityListComponent} from './components/entity-list/entity-list.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {SettingComponent} from './components/setting/setting.component';
import {EditorEntityComponent} from './components/editor-entity/editor-entity.component';
import {TagComponent} from './components/entities-ui/tag/tag.component';
import {TypeComponent} from './components/entities-ui/type/type.component';
import {TypeServiceComponent} from './components/entities-ui/type-service/type-service.component';

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
        redirectTo: 'private',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: EditorEntityComponent
      },
      {
        path: 'database',
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
  {path: 'shopping-cart', component: ShoppingCartComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {
}
