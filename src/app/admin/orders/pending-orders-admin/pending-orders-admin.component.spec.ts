import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrdersAdminComponent } from './pending-orders-admin.component';

describe('PendingOrdersAdminComponent', () => {
  let component: PendingOrdersAdminComponent;
  let fixture: ComponentFixture<PendingOrdersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingOrdersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrdersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
