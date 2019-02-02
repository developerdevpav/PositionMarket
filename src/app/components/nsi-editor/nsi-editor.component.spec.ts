import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsiEditorComponent } from './nsi-editor.component';

describe('NsiEditorComponent', () => {
  let component: NsiEditorComponent;
  let fixture: ComponentFixture<NsiEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsiEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
