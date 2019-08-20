import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatabaseTypeEntityPageComponent} from './database-type-entity-page.component';

describe('DatabaseTypeEntityPageComponent', () => {
  let component: DatabaseTypeEntityPageComponent;
  let fixture: ComponentFixture<DatabaseTypeEntityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseTypeEntityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTypeEntityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
