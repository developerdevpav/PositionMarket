import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatabaseCommonPageComponent} from './database-common-page.component';

describe('DatabaseCommonPageComponent', () => {
  let component: DatabaseCommonPageComponent;
  let fixture: ComponentFixture<DatabaseCommonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseCommonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseCommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
