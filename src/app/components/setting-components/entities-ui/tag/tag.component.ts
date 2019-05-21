import {Component, OnInit} from '@angular/core';
import {AbstractNsiComponent} from '../abstract.nsi.component';
import {Tag} from '../../../../store/models/tag.model';
import {MatDialog} from '@angular/material';
import {Action, MemoizedSelector, MemoizedSelectorWithProps, Store} from '@ngrx/store';
import {Type} from '../../../../store/models/type.model';
import {LanguageState} from '../../../../store/reducers/language.reducer';
import {ApiTagCreate, ApiTagDelete, ApiTagLoadAll, ApiTagUpdate} from '../../../../store/actions/tag.actions';
import {selectTagById, selectTagsByLanguage} from '../../../../store/selectors/tag.selectors';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent extends AbstractNsiComponent<Tag> implements OnInit {

  constructor(public dialog: MatDialog, public store: Store<Type>) {
    super(store, dialog, 'tag');
  }

  protected getActionForChange(object: Tag): Action {
    return new ApiTagUpdate(object);
  }

  protected getActionForCreate(object: Tag): Action {
    return new ApiTagCreate(object);
  }

  protected getActionForDelete(uuids: string[]): Action {
    return new ApiTagDelete(uuids);
  }

  protected getSelectorForGetAllNsi(): MemoizedSelector<LanguageState, { id: string; title: string }[]> {
    return selectTagsByLanguage;
  }

  protected getSelectorForGetNsiById(): MemoizedSelectorWithProps<Tag, any, any> {
    return selectTagById;
  }

  protected getActionForLoadAll(): Action {
    return new ApiTagLoadAll();
  }

}
