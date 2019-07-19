import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavExpansionPanelHeaderTitleComponent} from './devpav-expansion-panel-header-title.component';

describe('DevpavExpansionPanelHeaderTitleComponent', () => {
  let component: DevpavExpansionPanelHeaderTitleComponent;
  let fixture: ComponentFixture<DevpavExpansionPanelHeaderTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavExpansionPanelHeaderTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavExpansionPanelHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
