import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DepavInputComponent} from './devpav-input.component';

describe('DepavInputComponent', () => {
  let component: DepavInputComponent;
  let fixture: ComponentFixture<DepavInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepavInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepavInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
