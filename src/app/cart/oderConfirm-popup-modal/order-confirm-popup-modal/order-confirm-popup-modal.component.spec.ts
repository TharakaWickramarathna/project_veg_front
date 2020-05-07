import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmPopupModalComponent } from './order-confirm-popup-modal.component';

describe('OrderConfirmPopupModalComponent', () => {
  let component: OrderConfirmPopupModalComponent;
  let fixture: ComponentFixture<OrderConfirmPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
