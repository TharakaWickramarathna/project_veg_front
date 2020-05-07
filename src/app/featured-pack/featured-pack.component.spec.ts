import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPackComponent } from './featured-pack.component';

describe('FeaturedPackComponent', () => {
  let component: FeaturedPackComponent;
  let fixture: ComponentFixture<FeaturedPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
