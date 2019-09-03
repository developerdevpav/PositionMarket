import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavInputTextareaComponent} from './devpav-input-textarea.component';

describe('DevpavInputTextareaComponent', () => {
  let component: DevpavInputTextareaComponent;
  let fixture: ComponentFixture<DevpavInputTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavInputTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavInputTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
