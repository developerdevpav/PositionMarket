import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Action, MemoizedSelector, MemoizedSelectorWithProps, Store} from '@ngrx/store';
import {
  ApiTypeCreate,
  ApiTypeDelete,
  ApiTypeLoadAll,
  ApiTypeUpdate
} from '../../../../store/actions/type.actions';
import {DialogEditEntityComponent} from '../../../universal/dialogs/dialog-edit-entity/dialog-edit-entity.component';
import {MatDialog} from '@angular/material';
import {Type} from '../../../../store/models/type.model';
import {selectTypeById, selectTypesByLanguage} from '../../../../store/selectors/type.selectors';
import {TypeService} from '../../../../store/models/type-service.model';
import {
  ApiTypeServiceCreate,
  ApiTypeServiceDelete,
  ApiTypeServiceLoadAll,
  ApiTypeServiceUpdate
} from '../../../../store/actions/type-service.actions';
import {LanguageState} from '../../../../store/reducers/language.reducer';
import {selectTypeServiceById, selectTypeServicesByLanguage} from '../../../../store/selectors/type-service.selectors';
import {AbstractNsiComponent} from '../abstract.nsi.component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent extends AbstractNsiComponent<Type> implements OnInit {

  constructor(public dialog: MatDialog, public store: Store<Type>) {
    super(store, dialog);
  }

  protected getActionForChange(object: Type): Action {
    return new ApiTypeUpdate(object);
  }

  protected getActionForCreate(object: Type): Action {
    return  new ApiTypeCreate(object);
  }

  protected getActionForDelete(uuids: string[]): Action {
    return new ApiTypeDelete(uuids);
  }

  protected getSelectorForGetAllNsi(): MemoizedSelector<LanguageState, { id: string; title: string }[]> {
    return selectTypesByLanguage;
  }

  protected getSelectorForGetNsiById(): MemoizedSelectorWithProps<Type, any, any> {
    return selectTypeById;
  }

  protected getActionForLoadAll(): Action {
    return new ApiTypeLoadAll();
  }

}
