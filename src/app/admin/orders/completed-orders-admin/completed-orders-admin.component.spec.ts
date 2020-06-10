import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrdersAdminComponent } from './completed-orders-admin.component';

describe('CompletedOrdersAdminComponent', () => {
  let component: CompletedOrdersAdminComponent;
  let fixture: ComponentFixture<CompletedOrdersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedOrdersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedOrdersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
