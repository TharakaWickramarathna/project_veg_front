import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedpackEditAdminComponent } from './featuredpack-edit-admin.component';

describe('FeaturedpackEditAdminComponent', () => {
  let component: FeaturedpackEditAdminComponent;
  let fixture: ComponentFixture<FeaturedpackEditAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedpackEditAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedpackEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
