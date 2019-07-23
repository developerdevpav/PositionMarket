import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserShoppingCartComponent} from './user-shopping-cart.component';

describe('UserShoppingCartComponent', () => {
  let component: UserShoppingCartComponent;
  let fixture: ComponentFixture<UserShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
