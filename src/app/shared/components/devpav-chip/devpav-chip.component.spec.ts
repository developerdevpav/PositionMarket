import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavChipComponent} from './devpav-chip.component';

describe('DevpavChipComponent', () => {
  let component: DevpavChipComponent;
  let fixture: ComponentFixture<DevpavChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
