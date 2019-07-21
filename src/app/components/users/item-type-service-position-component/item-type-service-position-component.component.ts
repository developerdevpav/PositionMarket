import {Component, Input, OnInit} from '@angular/core';
import {EntityTypeServiceEnumToProduct} from '../../../store/models/catalog-entities';
import {Store} from '@ngrx/store';

@Component({
  selector: 'item-type-service-position-component',
  templateUrl: './item-type-service-position-component.component.html',
  styleUrls: ['./item-type-service-position-component.component.scss']
})
export class ItemTypeServicePositionComponentComponent implements OnInit {

  @Input()
  public entity: EntityTypeServiceEnumToProduct;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    console.log('ngOnInit ItemTypeServicePositionComponentComponent');
    console.log(this.entity);
  }

}
