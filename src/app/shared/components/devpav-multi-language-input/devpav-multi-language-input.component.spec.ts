import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavMultiLanguageInputComponent} from './devpav-multi-language-input.component';

describe('DevpavMultiLanguageInputComponent', () => {
  let component: DevpavMultiLanguageInputComponent;
  let fixture: ComponentFixture<DevpavMultiLanguageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavMultiLanguageInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavMultiLanguageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
