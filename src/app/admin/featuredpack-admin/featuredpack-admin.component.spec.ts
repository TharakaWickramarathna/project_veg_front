import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedpackAdminComponent } from './featuredpack-admin.component';

describe('FeaturedpackAdminComponent', () => {
  let component: FeaturedpackAdminComponent;
  let fixture: ComponentFixture<FeaturedpackAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedpackAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedpackAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
