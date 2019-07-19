import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavExpansionPanelHeaderComponent} from './devpav-expansion-panel-header.component';

describe('DevpavExpansionPanelHeaderComponent', () => {
  let component: DevpavExpansionPanelHeaderComponent;
  let fixture: ComponentFixture<DevpavExpansionPanelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavExpansionPanelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavExpansionPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
