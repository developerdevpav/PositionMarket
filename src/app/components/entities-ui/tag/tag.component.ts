import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {LoadTagsApi} from '../../../store/actions/tag.actions';
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

}
