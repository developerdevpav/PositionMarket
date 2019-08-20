import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadTags} from '../../../store/tag/tag.actions';
import {selectByLanguage} from '../../../store/tag/tag.selectors';
import {Observable} from 'rxjs';
import {NsiLanguage} from '../../../store/entities/present.entities';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-database-tag-entity-page',
  templateUrl: './database-tag-entity-page.component.html',
  styleUrls: ['./database-tag-entity-page.component.scss']
})
export class DatabaseTagEntityPageComponent implements OnInit {

  tags$: Observable<NsiLanguage[]>;

  constructor(private store: Store<any>,
              private router: Router,
              private route: ActivatedRoute) {
    this.store.dispatch(new LoadTags());
  }

  ngOnInit() {
    this.tags$ = this.store.select(selectByLanguage);
  }

  create($event: boolean) {
    console.log('create tag', $event);
  }

  change($event: string) {
    const navigate = this.router.navigate(
      ['edit', $event],
      {relativeTo: this.route}
    );
  }

  delete($event: string[]) {

  }

  view($event: string) {
    const navigate = this.router.navigate(
      ['view', $event],
      {relativeTo: this.route}
    );
  }

}
