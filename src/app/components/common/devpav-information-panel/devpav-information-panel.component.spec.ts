import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavInformationPanelComponent} from './devpav-information-panel.component';

describe('DevpavInformationPanelComponent', () => {
  let component: DevpavInformationPanelComponent;
  let fixture: ComponentFixture<DevpavInformationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavInformationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavInformationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
