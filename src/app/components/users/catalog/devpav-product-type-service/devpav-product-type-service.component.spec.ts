import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavProductTypeServiceComponent} from './devpav-product-type-service.component';

describe('DevpavProductTypeServiceComponent', () => {
  let component: DevpavProductTypeServiceComponent;
  let fixture: ComponentFixture<DevpavProductTypeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavProductTypeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavProductTypeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
