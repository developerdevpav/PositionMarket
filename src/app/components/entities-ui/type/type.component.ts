import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddTag, DeleteTag, DeleteTags, LoadTagsApi, UpdateTag} from '../../../store/actions/tag.actions';
import {AddType, DeleteType, DeleteTypes, LoadTypesApi, UpdateType} from '../../../store/actions/type.actions';
import {selectTypesByLanguage} from '../../../store/selectors/selectors';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  $types: Observable<{uuid: string, value: string}[]> = this.store.select(selectTypesByLanguage);

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadTypesApi());
  }

  create($event) {
    this.store.dispatch(new AddType($event));
  }

  change($event) {
    this.store.dispatch(new UpdateType($event));
  }

  delete($event) {
    this.store.dispatch(new DeleteTypes($event));
  }

}
