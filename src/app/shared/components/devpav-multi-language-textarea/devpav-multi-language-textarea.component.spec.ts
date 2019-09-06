import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavMultiLanguageTextareaComponent} from './devpav-multi-language-textarea.component';

describe('DevpavMultiLanguageTextareaComponent', () => {
  let component: DevpavMultiLanguageTextareaComponent;
  let fixture: ComponentFixture<DevpavMultiLanguageTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavMultiLanguageTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavMultiLanguageTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
