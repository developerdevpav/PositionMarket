import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemServiceOfPositionComponent} from './item-service-of-position.component';

describe('ItemServiceOfPositionComponent', () => {
  let component: ItemServiceOfPositionComponent;
  let fixture: ComponentFixture<ItemServiceOfPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemServiceOfPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemServiceOfPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
