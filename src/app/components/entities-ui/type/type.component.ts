import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectTypesByLanguage} from '../../../store/selectors/selectors';
import {
  ApiTypeCreate,
  ApiTypeDelete,
  ApiTypeLoadAll,
  ApiTypeUpdate
} from '../../../store/actions/type.actions';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  $types: Observable<{uuid: string, value: string}[]> = this.store.select(selectTypesByLanguage);

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ApiTypeLoadAll());
  }

  create($event) {
    this.store.dispatch(new ApiTypeCreate($event));
  }

  change($event) {
    this.store.dispatch(new ApiTypeUpdate($event));
  }

  delete($event) {
    this.store.dispatch(new ApiTypeDelete($event));
  }

}
