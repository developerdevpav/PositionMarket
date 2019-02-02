import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsiListComponent } from './nsi-list.component';

describe('NsiListComponent', () => {
  let component: NsiListComponent;
  let fixture: ComponentFixture<NsiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
