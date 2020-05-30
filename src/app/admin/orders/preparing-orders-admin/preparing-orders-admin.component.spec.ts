import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingOrdersAdminComponent } from './preparing-orders-admin.component';

describe('PreparingOrdersAdminComponent', () => {
  let component: PreparingOrdersAdminComponent;
  let fixture: ComponentFixture<PreparingOrdersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparingOrdersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparingOrdersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
