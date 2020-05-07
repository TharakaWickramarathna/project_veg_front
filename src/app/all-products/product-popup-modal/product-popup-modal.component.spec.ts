import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPopupModalComponent } from './product-popup-modal.component';

describe('ProductPopupModalComponent', () => {
  let component: ProductPopupModalComponent;
  let fixture: ComponentFixture<ProductPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
