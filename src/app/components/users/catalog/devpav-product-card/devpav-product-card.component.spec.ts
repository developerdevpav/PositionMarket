import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavProductCardComponent} from './devpav-product-card.component';

describe('DevpavProductCardComponent', () => {
  let component: DevpavProductCardComponent;
  let fixture: ComponentFixture<DevpavProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
