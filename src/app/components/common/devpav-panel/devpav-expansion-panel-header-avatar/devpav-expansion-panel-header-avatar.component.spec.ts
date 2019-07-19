import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavExpansionPanelHeaderAvatarComponent} from './devpav-expansion-panel-header-avatar.component';

describe('DevpavExpansionPanelHeaderAvatarComponent', () => {
  let component: DevpavExpansionPanelHeaderAvatarComponent;
  let fixture: ComponentFixture<DevpavExpansionPanelHeaderAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavExpansionPanelHeaderAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavExpansionPanelHeaderAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
