import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavInputComponent} from './devpav-input.component';

describe('DevpavInputComponent', () => {
  let component: DevpavInputComponent;
  let fixture: ComponentFixture<DevpavInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
