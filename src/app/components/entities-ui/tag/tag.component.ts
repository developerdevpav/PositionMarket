import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Tag} from '../../../store/models/tag.model';
import {selectAll, selectNsiByLanguage} from 'src/app/store/reducers/tag.reducer';
import {LoadTags, LoadTagsApi} from '../../../store/actions/tag.actions';
import {Language} from '../../../store/models/language.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  $tags: Observable<{uuid: string, value: string}[]> = this.store.select(selectNsiByLanguage, {language: Language.EN});

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new LoadTagsApi());
  }

}
