import {Component, OnInit} from '@angular/core';
import {Action, MemoizedSelector, MemoizedSelectorWithProps, Store} from '@ngrx/store';
import {ApiTypeCreate, ApiTypeDelete, ApiTypeLoadAll, ApiTypeUpdate} from '../../../../store/actions/type.actions';
import {MatDialog} from '@angular/material';
import {Type} from '../../../../store/models/type.model';
import {selectTypeById, selectTypesByLanguage} from '../../../../store/selectors/type.selectors';
import {LanguageState} from '../../../../store/reducers/language.reducer';
import {AbstractNsiComponent} from '../abstract.nsi.component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent extends AbstractNsiComponent<Type> implements OnInit {

  constructor(public dialog: MatDialog, public store: Store<Type>) {
    super(store, dialog, 'type');
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
