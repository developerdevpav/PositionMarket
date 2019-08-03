import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductServiceExpansionComponent} from './product-service-expansion.component';

describe('ProductServiceExpansionComponent', () => {
  let component: ProductServiceExpansionComponent;
  let fixture: ComponentFixture<ProductServiceExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductServiceExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductServiceExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
