import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavCardComponent} from './devpav-card.component';

describe('DevpavCardComponent', () => {
  let component: DevpavCardComponent;
  let fixture: ComponentFixture<DevpavCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
