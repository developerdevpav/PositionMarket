import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {EntityTypeServiceEnumToProduct} from '../../../store/models/catalog-entities';
import {TypeServiceEnum} from '../../../store/models/type-service';
import {ProductConverterService} from '../services/product-converter.service';

@Component({
  selector: 'app-devpav-catalog-service-description',
  templateUrl: './devpav-catalog-service-description.component.html',
  styleUrls: ['./devpav-catalog-service-description.component.scss']
})
export class DevpavCatalogServiceDescriptionComponent implements OnInit, OnDestroy {

  @Input()
  idAttraction: string = '';

  private subscription: Subscription = new Subscription();
  entities: EntityTypeServiceEnumToProduct[] = [];

  expansionPanel: Map<TypeServiceEnum, null> = new Map();

  constructor(private store: Store<any>, private converter: ProductConverterService) {
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
