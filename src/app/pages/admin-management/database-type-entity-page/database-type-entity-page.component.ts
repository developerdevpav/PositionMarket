import {Component, OnInit} from '@angular/core';
import {NsiLanguage} from '../../../store/entities/present.entities';
import {Store} from '@ngrx/store';
import {DeleteTypes, LoadTypes} from '../../../store/type/type.actions';
import {selectTypesByLanguage} from '../../../store/type/type.selectors';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-database-type-entity-page',
  templateUrl: './database-type-entity-page.component.html',
  styleUrls: ['./database-type-entity-page.component.scss']
})
export class DatabaseTypeEntityPageComponent implements OnInit {

  types$: NsiLanguage[] = [];

  constructor(private store: Store<any>,
              private route: ActivatedRoute,
              protected router: Router) {
    this.store.dispatch(new LoadTypes());
  }

  ngOnInit() {
    this.store.select(selectTypesByLanguage).subscribe(array => {
      this.types$ = array;
    });
  }

  delete($event: string[]) {
    if ($event && $event.length) {
      this.store.dispatch(new DeleteTypes({ids: $event}));
    }
  }

  change($event: string) {
    this.router.navigate(['edit', $event], {relativeTo: this.route});
  }

  create($event: boolean) {
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  view($event: string) {
    this.router.navigate(['view', $event], {relativeTo: this.route});
  }
}
