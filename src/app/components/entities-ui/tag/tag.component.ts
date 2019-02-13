import {Component, OnInit} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectTagsByLanguage} from '../../../store/selectors/selectors';
import {
  ApiTagCreate,
  ApiTagDelete,
  ApiTagLoadAll,
  ApiTagUpdate
} from '../../../store/actions/tag.actions';
import {GetTypeById} from '../../../store/actions/type.actions';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  $tags: Observable<{uuid: string, value: string}[]> = this.store.select(selectTagsByLanguage);
  getById$: Action = new GetTypeById( '');
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new ApiTagLoadAll());
  }

  create($event) {
    this.store.dispatch(new ApiTagCreate($event));
  }

  change($event) {
    this.store.dispatch(new ApiTagUpdate($event));
  }

  delete($event) {
    this.store.dispatch(new ApiTagDelete($event));
  }

  getById($event) {
    this.store.dispatch(new ApiTagDelete($event));
  }
}
