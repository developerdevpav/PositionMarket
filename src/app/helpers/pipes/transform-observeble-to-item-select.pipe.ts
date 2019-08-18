import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {ItemSelect} from '../../containers/database/group-data/group-data.component';

@Pipe({
  name: 'transformItemSelect'
})
export class TransformObservableToItemSelectPipe implements PipeTransform {

  transform(value: Observable<any[]>): Observable<ItemSelect[]> {
    console.log(value);
    return value.pipe(
      filter(array => !!array),
      map(array => {
        return array.map(item => {
          return {id: item.id, value: item.value} as ItemSelect;
        });
      })
    );
  }

}
