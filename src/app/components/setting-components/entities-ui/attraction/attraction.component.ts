import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {Observable} from 'rxjs';
import {selectAll} from 'src/app/store/reducers/attraction.reducer';
import {ApiAttractionLoadAll} from '../../../../store/actions/attraction.actions';
import {selectAttractionsByLanguage} from '../../../../store/selectors/selectors';
import {AttractionUI} from '../../../../ui/models';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  attractions$: Observable<AttractionUI[]> = this.store.select(selectAttractionsByLanguage);
  selectAction = '';

  constructor(private store: Store<AttractionModel>) {
  }

  ngOnInit() {
    this.store.dispatch(new ApiAttractionLoadAll());
    this.selectAction = '';
  }

  functionSelectAction(uuid: string) {
    this.selectAction = uuid === this.selectAction ? '' : uuid;
  }

  isSelect(uuid: string) {
    return this.selectAction === uuid;
  }

}
