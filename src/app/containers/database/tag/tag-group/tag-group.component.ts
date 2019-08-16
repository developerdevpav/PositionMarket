import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagEntity } from 'src/app/store/entities/tag.entity';
import { Store, select } from '@ngrx/store';
import { LoadTags } from 'src/app/store/tag/tag.actions';
import { selectByLanguage } from 'src/app/store/tag/tag.selectors';
import { NsiLanguage } from 'src/app/store/entities/present.entities';

@Component({
  selector: 'tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.scss']
})
export class TagGroupComponent implements OnInit {

  entities$: Observable<NsiLanguage[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadTags());


  }

  ngDoCheck(): void {
    this.entities$ = this.store.pipe( select(selectByLanguage) );
  }

}
