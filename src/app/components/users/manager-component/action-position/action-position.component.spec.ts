import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionPositionComponent} from './action-position.component';

describe('ActionPositionComponent', () => {
  let component: ActionPositionComponent;
  let fixture: ComponentFixture<ActionPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
