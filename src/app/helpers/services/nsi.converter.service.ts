import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {ItemSelect} from '../../containers/database/group-data/group-data.component';

@Injectable()
export class NsiConverterService {

  constructor() {
  }

  public convertNsiLanguageToItemSelect(observable: Observable<any>) {
    return observable.pipe(
      filter(array => !!array),
      map(array => {
        return array.map(item => {
          return {id: item.id, value: item.value} as ItemSelect;
        });
      })
    );
  }

}
