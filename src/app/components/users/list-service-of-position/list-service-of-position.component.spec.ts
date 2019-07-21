import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListServiceOfPositionComponent} from './list-service-of-position.component';

describe('ListServiceOfPositionComponent', () => {
  let component: ListServiceOfPositionComponent;
  let fixture: ComponentFixture<ListServiceOfPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceOfPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceOfPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
