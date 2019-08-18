import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatabaseTagEntityPageComponent} from './database-tag-entity-page.component';

describe('DatabaseTagEntityPageComponent', () => {
  let component: DatabaseTagEntityPageComponent;
  let fixture: ComponentFixture<DatabaseTagEntityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseTagEntityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTagEntityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
