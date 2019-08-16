import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WrapperGroupDataComponent} from './wrapper-group-data.component';

describe('WrapperGroupDataComponent', () => {
  let component: WrapperGroupDataComponent;
  let fixture: ComponentFixture<WrapperGroupDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperGroupDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperGroupDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
