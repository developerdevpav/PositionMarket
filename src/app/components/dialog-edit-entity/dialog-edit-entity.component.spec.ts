import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditEntityComponent } from './dialog-edit-entity.component';

describe('DialogEditEntityComponent', () => {
  let component: DialogEditEntityComponent;
  let fixture: ComponentFixture<DialogEditEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
