import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListCatalogPositionComponent} from './list-catalog-position.component';

describe('ListCatalogPositionComponent', () => {
  let component: ListCatalogPositionComponent;
  let fixture: ComponentFixture<ListCatalogPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCatalogPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCatalogPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
