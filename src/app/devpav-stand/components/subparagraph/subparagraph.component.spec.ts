import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubparagraphComponent} from './subparagraph.component';

describe('SubparagraphComponent', () => {
  let component: SubparagraphComponent;
  let fixture: ComponentFixture<SubparagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubparagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubparagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
