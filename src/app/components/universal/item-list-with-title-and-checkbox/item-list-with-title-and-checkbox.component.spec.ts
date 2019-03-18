import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListWithTitleAndCheckboxComponent } from './item-list-with-title-and-checkbox.component';

describe('ItemListWithTitleAndCheckboxComponent', () => {
  let component: ItemListWithTitleAndCheckboxComponent;
  let fixture: ComponentFixture<ItemListWithTitleAndCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListWithTitleAndCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListWithTitleAndCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
