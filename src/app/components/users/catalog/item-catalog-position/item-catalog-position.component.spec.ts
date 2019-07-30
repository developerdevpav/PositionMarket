import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemCatalogPositionComponent} from './item-catalog-position.component';

describe('ItemCatalogPositionComponent', () => {
  let component: ItemCatalogPositionComponent;
  let fixture: ComponentFixture<ItemCatalogPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCatalogPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCatalogPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
