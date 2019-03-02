import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionAttractionComponent } from './dialog-action-attraction.component';

describe('DialogActionAttractionComponent', () => {
  let component: DialogActionAttractionComponent;
  let fixture: ComponentFixture<DialogActionAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogActionAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActionAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
