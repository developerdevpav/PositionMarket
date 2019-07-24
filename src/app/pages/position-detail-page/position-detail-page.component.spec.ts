import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PositionDetailPageComponent} from './position-detail-page.component';

describe('PositionDetailPageComponent', () => {
  let component: PositionDetailPageComponent;
  let fixture: ComponentFixture<PositionDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
