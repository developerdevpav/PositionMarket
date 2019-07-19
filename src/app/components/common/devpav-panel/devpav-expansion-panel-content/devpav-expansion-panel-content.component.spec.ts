import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavExpansionPanelContentComponent} from './devpav-expansion-panel-content.component';

describe('DevpavExpansionPanelContentComponent', () => {
  let component: DevpavExpansionPanelContentComponent;
  let fixture: ComponentFixture<DevpavExpansionPanelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavExpansionPanelContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavExpansionPanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
