import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AddTag, DeleteTag, DeleteTags, LoadTagsApi, UpdateTag} from '../../../store/actions/tag.actions';
import {Language} from '../../../store/models/language.model';
import {selectTagsByLanguage} from '../../../store/selectors/selectors';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  $tags: Observable<{uuid: string, value: string}[]> = this.store.select(selectTagsByLanguage);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new LoadTagsApi());
  }

  create($event) {
    this.store.dispatch(new AddTag($event));
  }

  change($event) {
    this.store.dispatch(new UpdateTag($event));
  }

  delete($event) {
    this.store.dispatch(new DeleteTags($event));
  }
}
