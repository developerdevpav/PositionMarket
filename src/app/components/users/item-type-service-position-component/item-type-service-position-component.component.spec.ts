import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemTypeServicePositionComponentComponent} from './item-type-service-position-component.component';

describe('ItemTypeServicePositionComponentComponent', () => {
  let component: ItemTypeServicePositionComponentComponent;
  let fixture: ComponentFixture<ItemTypeServicePositionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTypeServicePositionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeServicePositionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
