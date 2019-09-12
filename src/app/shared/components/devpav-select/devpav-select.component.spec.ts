import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevpavSelectComponent } from './devpav-select.component';

describe('DevpavSelectComponent', () => {
  let component: DevpavSelectComponent;
  let fixture: ComponentFixture<DevpavSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
