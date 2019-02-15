import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  menu = [];
  menuListPrivate = [];
  menuListDataBase = [];

  constructor(public router: Router) { }

  ngOnInit() {

    this.menuListDataBase = [
      {
        label: 'Tags',
        link: '/settings/database/tag'
      },
      {
        label: 'Types',
        link: '/settings/database/type'
      },
      {
        label: 'Type Services',
        link: '/settings/database/type-service'
      },
      {
        label: 'Products',
        link: '/settings/database/product'
      },
      {
        label: 'Attractions',
        link: '/settings/database/attraction'
      }
    ];
    this.menu = this.menuListPrivate;
  }

  public selectedTab(e) {
    console.log(e);
    switch (e.index) {
      case 0:
        this.router.navigateByUrl('/settings/users');
        this.menu = [];
        break;
      case 1:
        this.router.navigateByUrl('/settings/database');
        this.menu = this.menuListDataBase;
        break;

      default:
        console.log('material-design-mdtabs-with-router');
        break;
    }
  }


  selectItem(e) {
    this.router.navigateByUrl(e.link);
  }

}
