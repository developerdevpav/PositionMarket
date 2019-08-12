import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionNsiComponent } from './dialog-action-nsi.component';

describe('DialogActionNsiComponent', () => {
  let component: DialogActionNsiComponent;
  let fixture: ComponentFixture<DialogActionNsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogActionNsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActionNsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
