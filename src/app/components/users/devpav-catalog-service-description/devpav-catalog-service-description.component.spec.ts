import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevpavCatalogServiceDescriptionComponent} from './devpav-catalog-service-description.component';

describe('DevpavCatalogServiceDescriptionComponent', () => {
  let component: DevpavCatalogServiceDescriptionComponent;
  let fixture: ComponentFixture<DevpavCatalogServiceDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpavCatalogServiceDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpavCatalogServiceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
