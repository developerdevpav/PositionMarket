import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemSelectPanelComponent} from './item-select-panel.component';

describe('ItemSelectPanelComponent', () => {
  let component: ItemSelectPanelComponent;
  let fixture: ComponentFixture<ItemSelectPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSelectPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSelectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
