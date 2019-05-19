import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiceAndPriceComponentComponent} from './service-and-price-component.component';

describe('ServiceAndPriceComponentComponent', () => {
  let component: ServiceAndPriceComponentComponent;
  let fixture: ComponentFixture<ServiceAndPriceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAndPriceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAndPriceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
