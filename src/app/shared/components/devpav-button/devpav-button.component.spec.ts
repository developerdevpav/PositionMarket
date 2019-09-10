import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavButtonComponent} from './devpav-button.component';

describe('DevpavButtonComponent', () => {
  let component: DevpavButtonComponent;
  let fixture: ComponentFixture<DevpavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
