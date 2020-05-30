import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateAdminComponent } from './product-create-admin.component';

describe('ProductCreateAdminComponent', () => {
  let component: ProductCreateAdminComponent;
  let fixture: ComponentFixture<ProductCreateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
