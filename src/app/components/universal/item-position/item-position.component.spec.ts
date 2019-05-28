import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemPositionComponent} from './item-position.component';

describe('ItemPositionComponent', () => {
  let component: ItemPositionComponent;
  let fixture: ComponentFixture<ItemPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
