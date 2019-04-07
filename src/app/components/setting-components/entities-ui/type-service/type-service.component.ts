import {Component, OnDestroy, OnInit} from '@angular/core';
import {Action, MemoizedSelector, MemoizedSelectorWithProps, Store} from '@ngrx/store';
import {
  ApiTypeServiceCreate,
  ApiTypeServiceDelete,
  ApiTypeServiceLoadAll,
  ApiTypeServiceUpdate
} from '../../../../store/actions/type-service.actions';
import {MatDialog} from '@angular/material';
import {TypeService} from 'src/app/store/models/type-service.model';
import {DialogEditEntityComponent} from '../../../universal/dialogs/dialog-edit-entity/dialog-edit-entity.component';
import {selectTypeServiceById, selectTypeServicesByLanguage} from '../../../../store/selectors/type-service.selectors';
import {Subscription} from 'rxjs';
import {AbstractNsiComponent} from '../abstract.nsi.component';
import {LanguageState} from '../../../../store/reducers/language.reducer';

@Component({
  selector: 'app-type-service',
  templateUrl: './type-service.component.html',
  styleUrls: ['./type-service.component.scss']
})
export class TypeServiceComponent extends AbstractNsiComponent<TypeService> implements OnInit, OnDestroy {

  constructor(public dialog: MatDialog, public store: Store<TypeService>) {
    super(store, dialog);
  }

  getActionForChange(object: TypeService): Action {
    return new ApiTypeServiceUpdate(object);
  }

  getActionForCreate(object: TypeService): Action {
    return new ApiTypeServiceCreate(object);
  }


  getActionForDelete(uuids: string[]): Action {
    return new ApiTypeServiceDelete(uuids);
  }

  getSelectorForGetAllNsi(): MemoizedSelector<LanguageState, { id: string; title: string }[]> {
    return selectTypeServicesByLanguage;
  }

  getSelectorForGetNsiById(): MemoizedSelectorWithProps<object, any, any> {
    return selectTypeServiceById;
  }

}
