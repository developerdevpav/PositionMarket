import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiTagLoadAll} from '../../store/actions/tag.actions';
import {selectTagsByLanguage} from '../../store/selectors/tag.selectors';
import {ApiTypeLoadAll} from '../../store/actions/type.actions';
import {selectTypesByLanguage} from '../../store/selectors/type.selectors';
import {selectPositionByLanguageForCatalog} from '../../store/selectors/position.selectors';
import {ApiAttractionLoadAll} from '../../store/actions/attraction.actions';
import {ApiTypeServiceLoadAll} from '../../store/actions/type-service.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  subscriber: Subscription = new Subscription();

  deployPositionDictionary: Map<string, string> = new Map();

  positions = [];

  dropdownAllTag: { id: any, title: string }[] = [];
  dropdownAllType: { id: any, title: string }[] = [];

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(new ApiTagLoadAll());
    this.store.dispatch(new ApiTypeLoadAll());
    this.store.dispatch(new ApiTypeServiceLoadAll());
    this.store.dispatch(new ApiAttractionLoadAll());

    const subscriberTag = this.store.select(selectTagsByLanguage).subscribe(it => {
      this.dropdownAllTag = it;
    });

    const subscriberType = this.store.select(selectTypesByLanguage).subscribe(it => {
      this.dropdownAllType = it;
    });

    const subscriberPosition = this.store.select(selectPositionByLanguageForCatalog).subscribe(it => {
      this.positions = it;
    });

    this.subscriber.add(subscriberTag);
    this.subscriber.add(subscriberType);
    this.subscriber.add(subscriberPosition);
  }

  showPriceAndService(it: any) {
    return it.products.map(product => {
      return  {
        id: product.id,
        attraction: it.id
      };
    });
  }

  deployItem(id: string) {
    const foundId = this.deployPositionDictionary.get(id);
    if ( foundId ) {
      this.deployPositionDictionary.delete(id);
    } else {
      this.deployPositionDictionary.set(id, id);
    }
  }

  idDeployItem(id: string) {
    return this.deployPositionDictionary.get(id);
  }

  next(position: any) {
    let indexImage = position.images.indexOf(position.image);

    if ( indexImage < 0 || ( (indexImage + 1) === position.images.length) ) {
      return;
    }

    position.image = position.images[++indexImage];
  }

  prev(position: any) {
    let indexImage = position.images.indexOf(position.image);

    if ( indexImage < 0 || ( indexImage === 0 ) ) {
      return;
    }

    position.image = position.images[--indexImage];
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
