import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PanelHeaderActionComponent} from './panel-header-action.component';

describe('PanelHeaderActionComponent', () => {
  let component: PanelHeaderActionComponent;
  let fixture: ComponentFixture<PanelHeaderActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelHeaderActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelHeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
