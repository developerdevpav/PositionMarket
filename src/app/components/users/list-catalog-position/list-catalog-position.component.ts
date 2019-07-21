import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {selectPositionByLanguageForCatalog} from '../../../store/selectors/position.selectors';
import {Store} from '@ngrx/store';
import {PositionByLanguageForCatalog} from '../../../ui/models';
import {ApiAttractionLoadAll, ApiAttractionLoadById} from '../../../store/actions/attraction.actions';

@Component({
  selector: 'app-list-catalog-position',
  templateUrl: './list-catalog-position.component.html',
  styleUrls: ['./list-catalog-position.component.scss']
})
export class ListCatalogPositionComponent implements OnInit, OnDestroy {

  expansion: boolean = false;

  subscriber: Subscription = new Subscription();

  positions: Observable<PositionByLanguageForCatalog[]> = this.store.select(selectPositionByLanguageForCatalog);

  constructor(private store: Store<any>) {
    this.store.dispatch(new ApiAttractionLoadAll());
  }

  ngOnInit() {
    this.subscriber.add(this.positions.subscribe());
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  get(id: string) {
    this.expansion = !this.expansion;
    this.store.dispatch(new ApiAttractionLoadById(id))
  }

}
