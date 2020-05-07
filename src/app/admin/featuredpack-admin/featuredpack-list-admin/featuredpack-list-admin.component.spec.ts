import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedpackListAdminComponent } from './featuredpack-list-admin.component';

describe('FeaturedpackListAdminComponent', () => {
  let component: FeaturedpackListAdminComponent;
  let fixture: ComponentFixture<FeaturedpackListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedpackListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedpackListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
