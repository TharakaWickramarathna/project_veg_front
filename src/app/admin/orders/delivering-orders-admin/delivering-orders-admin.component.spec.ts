import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveringOrdersAdminComponent } from './delivering-orders-admin.component';

describe('DeliveringOrdersAdminComponent', () => {
  let component: DeliveringOrdersAdminComponent;
  let fixture: ComponentFixture<DeliveringOrdersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveringOrdersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveringOrdersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
