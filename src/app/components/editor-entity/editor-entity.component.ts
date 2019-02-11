import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Nsi} from '../../store/models/abstract.model';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {selectAll} from 'src/app/store/reducers/type.reducer';

@Component({
  selector: 'app-editor-entity',
  templateUrl: './editor-entity.component.html',
  styleUrls: ['./editor-entity.component.scss']
})
export class EditorEntityComponent implements OnInit {

  list$: Observable<Nsi[]> = this.store.select(selectAll);

  constructor(translate: TranslateService, private store: Store<any>) {

  }

  ngOnInit() {
  }

}
