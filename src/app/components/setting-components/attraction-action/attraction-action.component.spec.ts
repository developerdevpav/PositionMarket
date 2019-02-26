import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionActionComponent } from './attraction-action.component';

describe('AttractionActionComponent', () => {
  let component: AttractionActionComponent;
  let fixture: ComponentFixture<AttractionActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
