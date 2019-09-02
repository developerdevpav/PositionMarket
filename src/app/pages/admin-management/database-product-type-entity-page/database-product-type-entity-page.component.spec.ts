import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatabaseProductTypeEntityPageComponent} from './database-product-type-entity-page.component';

describe('DatabaseProductTypeEntityPageComponent', () => {
  let component: DatabaseProductTypeEntityPageComponent;
  let fixture: ComponentFixture<DatabaseProductTypeEntityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseProductTypeEntityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseProductTypeEntityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
