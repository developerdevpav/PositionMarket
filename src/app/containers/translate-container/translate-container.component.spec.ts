import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TranslateContainerComponent} from './translate-container.component';

describe('TranslateContainerComponent', () => {
  let component: TranslateContainerComponent;
  let fixture: ComponentFixture<TranslateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
