import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TranslateTextAreaComponentComponent} from './translate-text-area-component.component';

describe('TranslateTextAreaComponentComponent', () => {
  let component: TranslateTextAreaComponentComponent;
  let fixture: ComponentFixture<TranslateTextAreaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateTextAreaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateTextAreaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
