import {Component, OnInit} from '@angular/core';
import {NsiLanguage} from '../../../store/entities/present.entities';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {DeleteProductTypes, LoadProductTypes} from '../../../store/product-type/product.type.actions';
import {selectProductTypesByLanguage} from '../../../store/product-type/product.type.selectors';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-database-product-type-entity-page',
  templateUrl: './database-product-type-entity-page.component.html',
  styleUrls: ['./database-product-type-entity-page.component.scss']
})
export class DatabaseProductTypeEntityPageComponent implements OnInit {

  subscription$ = new Subscription();

  productTypes$: NsiLanguage[] = [];

  constructor(private store: Store<any>, private router: Router, private route: ActivatedRoute) {
    this.store.dispatch(new LoadProductTypes());
  }

  ngOnInit() {
    const subscriberProductTypes = this.store.select(selectProductTypesByLanguage).subscribe(it => this.productTypes$ = it);
    this.subscription$.add(subscriberProductTypes);
  }

  create($event: boolean) {
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  change($event: string) {
    this.router.navigate(['edit', $event], {relativeTo: this.route});
  }

  delete($event: string[]) {
    if ($event) {
      this.store.dispatch(new DeleteProductTypes({ids: $event}));
    }
  }

  view($event: string) {
    this.router.navigate(['view', $event], {relativeTo: this.route});
  }

}
