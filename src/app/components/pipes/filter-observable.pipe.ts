import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Pipe({
  name: 'filterList'
})
export class FilterObservablePipe implements PipeTransform {

  transform(observable: {id: string, title: string}[], value: string): any {
    value = value.trim();

    if ( !value || value.length === 0 ) {
      return observable;
    }

    return observable.filter(list => list.title.toLowerCase().startsWith(value.toLowerCase()));
  }

}
