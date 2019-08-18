import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormGroupDataComponent} from './form-group-data.component';

describe('FormGroupDataComponent', () => {
  let component: FormGroupDataComponent;
  let fixture: ComponentFixture<FormGroupDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
