import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionNsiDialogComponent} from './action-nsi-dialog.component';

describe('ActionNsiDialogComponent', () => {
  let component: ActionNsiDialogComponent;
  let fixture: ComponentFixture<ActionNsiDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionNsiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNsiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
