import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavTextareaComponent} from './devpav-textarea.component';

describe('DevpavTextareaComponent', () => {
  let component: DevpavTextareaComponent;
  let fixture: ComponentFixture<DevpavTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
