import {Component, OnInit} from '@angular/core';
import {ImageUI, OptionDevpavCard} from '../../ui/models';
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

  images: ImageUI[] = [
    {
      id: 1,
      index: 1,
      url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'
    },
    {
      id: 2,
      index: 2,
      url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
    }
  ];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ApiAttractionLoadAll());
    this.store.dispatch(new ApiTypeServiceLoadAll());
    this.store.dispatch(new ApiTagLoadAll());
    this.store.dispatch(new ApiTypeLoadAll());
  }

}
