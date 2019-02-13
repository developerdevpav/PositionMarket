import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectTypeServicesByLanguage} from '../../../store/selectors/selectors';
import {
  ApiTypeServiceCreate, ApiTypeServiceDelete,
  ApiTypeServiceLoadAll, ApiTypeServiceUpdate,
  DeleteTypeServices,
  UpdateTypeService
} from '../../../store/actions/type-service.actions';

@Component({
  selector: 'app-type-service',
  templateUrl: './type-service.component.html',
  styleUrls: ['./type-service.component.scss']
})
export class TypeServiceComponent implements OnInit {

  $typeservices: Observable<{uuid: string, value: string}[]> = this.store.select(selectTypeServicesByLanguage);

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ApiTypeServiceLoadAll());
  }

  create($event) {
    this.store.dispatch(new ApiTypeServiceCreate($event));
  }

  change($event) {
    this.store.dispatch(new ApiTypeServiceUpdate($event));
  }

  delete($event) {
    this.store.dispatch(new ApiTypeServiceDelete($event));
  }

}
