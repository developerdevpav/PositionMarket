import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityChipActionComponent } from './entity-chip-action.component';

describe('EntityChipActionComponent', () => {
  let component: EntityChipActionComponent;
  let fixture: ComponentFixture<EntityChipActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityChipActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityChipActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
