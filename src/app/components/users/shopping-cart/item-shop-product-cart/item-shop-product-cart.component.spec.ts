import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemShopProductCartComponent} from './item-shop-product-cart.component';

describe('ItemShopProductCartComponent', () => {
  let component: ItemShopProductCartComponent;
  let fixture: ComponentFixture<ItemShopProductCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemShopProductCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShopProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
