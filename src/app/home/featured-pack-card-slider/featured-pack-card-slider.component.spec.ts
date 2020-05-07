import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPackCardSliderComponent } from './featured-pack-card-slider.component';

describe('FeaturedPackCardSliderComponent', () => {
  let component: FeaturedPackCardSliderComponent;
  let fixture: ComponentFixture<FeaturedPackCardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPackCardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPackCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
