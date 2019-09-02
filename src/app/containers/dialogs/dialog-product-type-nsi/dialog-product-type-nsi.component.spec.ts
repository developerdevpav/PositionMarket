import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogProductTypeNsiComponent} from './dialog-product-type-nsi.component';

describe('DialogProductTypeNsiComponent', () => {
  let component: DialogProductTypeNsiComponent;
  let fixture: ComponentFixture<DialogProductTypeNsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProductTypeNsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProductTypeNsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
