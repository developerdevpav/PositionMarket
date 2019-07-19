import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavExpansionPanelHeaderActionComponent} from './devpav-expansion-panel-header-action.component';

describe('DevpavExpansionPanelHeaderActionComponent', () => {
  let component: DevpavExpansionPanelHeaderActionComponent;
  let fixture: ComponentFixture<DevpavExpansionPanelHeaderActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavExpansionPanelHeaderActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavExpansionPanelHeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
