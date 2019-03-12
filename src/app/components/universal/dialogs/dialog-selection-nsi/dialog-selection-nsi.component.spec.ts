import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelectionNsiComponent } from './dialog-selection-nsi.component';

describe('DialogSelectionNsiComponent', () => {
  let component: DialogSelectionNsiComponent;
  let fixture: ComponentFixture<DialogSelectionNsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSelectionNsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSelectionNsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
