import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogAlertWarningComponent} from './dialog-alert-warning.component';

describe('DialogAlertWarningComponent', () => {
  let component: DialogAlertWarningComponent;
  let fixture: ComponentFixture<DialogAlertWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAlertWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlertWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
