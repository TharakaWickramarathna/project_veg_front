import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedpackCreateAdminComponent } from './featuredpack-create-admin.component';

describe('FeaturedpackCreateAdminComponent', () => {
  let component: FeaturedpackCreateAdminComponent;
  let fixture: ComponentFixture<FeaturedpackCreateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedpackCreateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedpackCreateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
