import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEntityComponent } from './panel-entity.component';

describe('PanelEntityComponent', () => {
  let component: PanelEntityComponent;
  let fixture: ComponentFixture<PanelEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
