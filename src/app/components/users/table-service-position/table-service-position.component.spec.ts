import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableServicePositionComponent} from './table-service-position.component';

describe('TableServicePositionComponent', () => {
  let component: TableServicePositionComponent;
  let fixture: ComponentFixture<TableServicePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableServicePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableServicePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
