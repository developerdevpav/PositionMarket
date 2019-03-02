import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {Observable} from 'rxjs';
import {ApiAttractionLoadAll} from '../../../../store/actions/attraction.actions';
import {selectAttractionsByLanguageArrayList} from '../../../../store/selectors/selectors';
import {Router} from '@angular/router';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  listForList$: Observable<{ uuid: string, value: string } []> = this.store.select(selectAttractionsByLanguageArrayList);

  constructor(private store: Store<AttractionModel>) {
  }

  ngOnInit() {
    this.store.dispatch(new ApiAttractionLoadAll());
  }

  create($event) {
  }

  changeOrView($event, action: string) {
    console.log('attraction changeOrView');
  }

  delete($event) {
    console.log('attraction delete');
  }

}
