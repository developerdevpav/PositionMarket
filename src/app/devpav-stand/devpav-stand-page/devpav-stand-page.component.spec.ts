import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavStandPageComponent} from './devpav-stand-page.component';

describe('DevpavStandPageComponent', () => {
  let component: DevpavStandPageComponent;
  let fixture: ComponentFixture<DevpavStandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavStandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavStandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
