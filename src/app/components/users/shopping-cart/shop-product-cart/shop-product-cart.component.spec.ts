import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShopProductCartComponent} from './shop-product-cart.component';

describe('ShopProductCartComponent', () => {
  let component: ShopProductCartComponent;
  let fixture: ComponentFixture<ShopProductCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
