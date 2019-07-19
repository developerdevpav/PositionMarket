import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavCheckboxComponent} from './devpav-checkbox.component';

describe('DevpavCheckboxComponent', () => {
  let component: DevpavCheckboxComponent;
  let fixture: ComponentFixture<DevpavCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
