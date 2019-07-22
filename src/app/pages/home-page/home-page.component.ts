import {Component, OnInit} from '@angular/core';
import {DevpavProductCardProps} from '../../components/users/catalog/devpav-product-card/devpav-product-card.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public options: DevpavProductCardProps = {
    icon: '',
    id: 'fewfewfwefw',
    price: undefined,
    title: 'Установка аттракциона',
    showCheckBox: false
  };

  valueCheck = false;

  constructor() { }

  ngOnInit() {
  }

  eventCheck($event: boolean) {
    this.valueCheck = $event;
  }

}
