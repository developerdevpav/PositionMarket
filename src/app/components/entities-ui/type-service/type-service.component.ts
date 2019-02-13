import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectTypeServicesByLanguage} from '../../../store/selectors/selectors';
import {AddTypeService, ApiLoadTypeServices, DeleteTypeService, UpdateTypeService} from '../../../store/actions/type-service.actions';
import {AddTag, DeleteTag, UpdateTag} from '../../../store/actions/tag.actions';
import {AddType, DeleteType, UpdateType} from '../../../store/actions/type.actions';

@Component({
  selector: 'app-type-service',
  templateUrl: './type-service.component.html',
  styleUrls: ['./type-service.component.scss']
})
export class TypeServiceComponent implements OnInit {

  $typeservices: Observable<{uuid: string, value: string}[]> = this.store.select(selectTypeServicesByLanguage);

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ApiLoadTypeServices());
  }

  create($event) {
    this.store.dispatch(new AddTypeService($event));
  }

  change($event) {
    this.store.dispatch(new UpdateTypeService($event));
  }

  delete($event) {
    this.store.dispatch(new DeleteTypeService($event));
  }

}
