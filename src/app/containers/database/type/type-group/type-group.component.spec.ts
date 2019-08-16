import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeGroupComponent } from './type-group.component';

describe('TypeGroupComponent', () => {
  let component: TypeGroupComponent;
  let fixture: ComponentFixture<TypeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
