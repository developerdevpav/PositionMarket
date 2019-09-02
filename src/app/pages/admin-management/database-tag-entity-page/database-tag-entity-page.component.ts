import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DeleteTags, LoadTags} from '../../../store/tag/tag.actions';
import {selectTagsByLanguage} from '../../../store/tag/tag.selectors';
import {NsiLanguage} from '../../../store/entities/present.entities';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-database-tag-entity-page',
  templateUrl: './database-tag-entity-page.component.html',
  styleUrls: ['./database-tag-entity-page.component.scss']
})
export class DatabaseTagEntityPageComponent implements OnInit {

  tags$: NsiLanguage[] = [];

  constructor(private store: Store<any>,
              private router: Router,
              private route: ActivatedRoute) {
    this.store.dispatch(new LoadTags());
  }

  ngOnInit() {
    this.store.select(selectTagsByLanguage).subscribe(it => {
      this.tags$ = it;
    });
  }

  create($event: boolean) {
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  change($event: string) {
    this.router.navigate(['edit', $event], {relativeTo: this.route});
  }

  delete($event: string[]) {
    if ($event) {
      this.store.dispatch(new DeleteTags({ids: $event}));
    }
  }

  view($event: string) {
    this.router.navigate(['view', $event], {relativeTo: this.route});
  }

}
