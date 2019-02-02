import {Component, OnInit} from '@angular/core';
import {Type} from '../../store/models/type.model';
import {Store} from '@ngrx/store';
import * as fromType from '../../store/reducers/type.reducer';
import {AddType} from '../../store/actions/type.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nsi-list',
  templateUrl: './nsi-list.component.html',
  styleUrls: ['./nsi-list.component.scss']
})
export class NsiListComponent implements OnInit {

  types: Observable<Type[]>;

  constructor(private store: Store<fromType.State>) {
  }

  ngOnInit() {
    this.types = this.store.select(fromType.selectAll);
  }

  createType() {
    const type: Type = {
      id: new Date().getMilliseconds().toString(),
      values: [
        {
          language: 'language',
          value: 'value'
        }
      ]
    };

    this.store.dispatch(new AddType({type}));
  }

  loadEntities(action: string) {
    this.store.dispatch({type: action});
    this.types = this.store.select(fromType.selectAll);
  }
}
