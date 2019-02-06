import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {NsiUI} from '../../store/models/ui.model';
import {LoadTagsApi} from '../../store/actions/tag.actions';
import {selectNsiByLanguage} from '../../store/reducers/tag.reducer';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  list$: Observable<NsiUI[]>;

  constructor(private translate: TranslateService, private store: Store<any>) {
  }


  ngOnInit() {
    this.store.dispatch(new LoadTagsApi());
    this.list$ = this.store.select(selectNsiByLanguage,
      {language: this.translate.store.currentLang});
  }

}
