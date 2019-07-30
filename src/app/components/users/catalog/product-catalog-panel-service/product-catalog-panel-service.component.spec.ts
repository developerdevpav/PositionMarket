import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductCatalogPanelServiceComponent} from './product-catalog-panel-service.component';

describe('ProductCatalogPanelServiceComponent', () => {
  let component: ProductCatalogPanelServiceComponent;
  let fixture: ComponentFixture<ProductCatalogPanelServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCatalogPanelServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatalogPanelServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
