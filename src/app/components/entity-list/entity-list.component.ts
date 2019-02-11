import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectAll, State} from 'src/app/store/reducers/type.reducer';
import {LoadTypesApi} from '../../store/actions/type.actions';
import {Type} from '../../store/models/type.model';
import {Nsi} from '../../store/models/abstract.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  @Input()
  list$: Observable<{uuid: string, value: string}[]>;

  constructor() {
  }

  ngOnInit() {}

}
