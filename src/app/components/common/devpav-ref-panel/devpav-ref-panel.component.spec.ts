import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavRefPanelComponent} from './devpav-ref-panel.component';

describe('DevpavRefPanelComponent', () => {
  let component: DevpavRefPanelComponent;
  let fixture: ComponentFixture<DevpavRefPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavRefPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavRefPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
