import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavIconSetComponent} from './devpav-icon-set.component';

describe('DevpavIconSetComponent', () => {
  let component: DevpavIconSetComponent;
  let fixture: ComponentFixture<DevpavIconSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavIconSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavIconSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
