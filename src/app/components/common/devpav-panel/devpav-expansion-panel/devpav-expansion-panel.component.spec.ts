import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavExpansionPanelComponent} from './devpav-expansion-panel.component';

describe('DevpavExpansionPanelComponent', () => {
  let component: DevpavExpansionPanelComponent;
  let fixture: ComponentFixture<DevpavExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
