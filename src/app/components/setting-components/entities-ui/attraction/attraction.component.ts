import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AttractionModel} from '../../../../store/models/attraction-model';
import {Observable, of} from 'rxjs';
import {selectAll} from 'src/app/store/reducers/attraction.reducer';
import {ApiAttractionLoadAll} from '../../../../store/actions/attraction.actions';
import {selectAttractionsByLanguage, selectTagById} from '../../../../store/selectors/selectors';
import {AttractionUI} from '../../../../ui/models';
import {ApiTagDelete} from '../../../../store/actions/tag.actions';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  attractions$: Observable<AttractionUI[]> = this.store.select(selectAttractionsByLanguage);
  listForList$: Observable<{ uuid: string, value: string } []>;

  constructor(private store: Store<AttractionModel>) {
    this.attractions$.subscribe((array) => {
      const list = array.map((position) => {
        return {uuid: position.uuid, value: position.title};
      });
      this.listForList$ = of(list);
    });
  }

  ngOnInit() {
    this.store.dispatch(new ApiAttractionLoadAll());
  }

  create($event) {
    console.log('attraction create');
  }

  changeOrView($event, action: string) {
    console.log('attraction changeOrView');
  }

  delete($event) {
    console.log('attraction delete');
  }

}
