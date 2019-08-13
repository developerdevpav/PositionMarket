import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNsiEntryComponent } from './dialog-nsi-entry.component';

describe('DialogNsiEntryComponent', () => {
  let component: DialogNsiEntryComponent;
  let fixture: ComponentFixture<DialogNsiEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNsiEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNsiEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
