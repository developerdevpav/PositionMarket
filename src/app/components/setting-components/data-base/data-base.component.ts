import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.scss']
})
export class DataBaseComponent implements OnInit {

  constructor() { }

  tables = [
    {
      label: '/tags',
      link: '/settings/database/tag'
    },
    {
      label: '/types',
      link: '/settings/database/type'
    },
    {
      label: '/type-services',
      link: '/settings/database/type-service'
    },
    {
      label: '/attractions',
      link: '/settings/database/attraction'
    }
  ];

  ngOnInit() {
  }
}
