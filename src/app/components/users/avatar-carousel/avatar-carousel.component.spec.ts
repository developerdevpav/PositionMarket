import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AvatarCarouselComponent} from './avatar-carousel.component';

describe('AvatarCarouselComponent', () => {
  let component: AvatarCarouselComponent;
  let fixture: ComponentFixture<AvatarCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
