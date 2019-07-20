import {Component, OnInit} from '@angular/core';
import {OptionDevpavCard} from '../../ui/models';
import {Store} from '@ngrx/store';
import {ApiAttractionLoadAll} from '../../store/actions/attraction.actions';
import {ApiTypeServiceLoadAll} from '../../store/actions/type-service.actions';
import {ApiTagLoadAll} from '../../store/actions/tag.actions';
import {ApiTypeLoadAll} from '../../store/actions/type.actions';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  object: OptionDevpavCard = {
    avatar: null,
    title: 'Pavel',
    id: 38
  };

  check: boolean = true;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ApiAttractionLoadAll());
    this.store.dispatch(new ApiTypeServiceLoadAll());
    this.store.dispatch(new ApiTagLoadAll());
    this.store.dispatch(new ApiTypeLoadAll());
  }

}
