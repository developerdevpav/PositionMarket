import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {selectNsiByLanguage} from '../../../store/reducers/type.reducer';
import {Language} from '../../../store/models/language.model';
import {Store} from '@ngrx/store';
import {LoadTagsApi} from '../../../store/actions/tag.actions';
import {LoadTypesApi} from '../../../store/actions/type.actions';
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

}
