import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {getPositionCatalog} from '../../../../store/selectors/position.selectors';
import {select, Store} from '@ngrx/store';
import {Row} from '../../table-service-position/table-service-position.component';
import {SelectionModel} from '@angular/cdk/collections';
import {PositionCatalog} from '../item-catalog-position/item-catalog-position.component';


export interface StatePanel {
  state: string;
  isExpansion: boolean;
  selectedProduct: SelectionModel<Row>;
}

@Component({
  selector: 'app-list-catalog-position',
  templateUrl: './list-catalog-position.component.html',
  styleUrls: ['./list-catalog-position.component.scss']
})
export class ListCatalogPositionComponent implements OnInit, OnDestroy, AfterViewInit {

  subscriber: Subscription = new Subscription();

  positions: Map<string | number, PositionCatalog> = new Map();

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.pipe(select(getPositionCatalog)).subscribe(array => {
      if (!array || array.length === 0) {
        this.positions.clear();
        return;
      }

      array.forEach(value => {
        const positionCatalog = this.positions.get(value.id);
        if (positionCatalog) {
          if (JSON.stringify(value) !== JSON.stringify(positionCatalog)) {
            this.positions.set(value.id, value);
          }
        } else {
          this.positions.set(value.id, value);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  getPositions() {
    return Array.from(this.positions.values());
  }

  ngAfterViewInit(): void {
  }

}
