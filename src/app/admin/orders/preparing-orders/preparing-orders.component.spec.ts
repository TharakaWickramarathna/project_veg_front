import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingOrdersComponent } from './preparing-orders.component';

describe('PreparingOrdersComponent', () => {
  let component: PreparingOrdersComponent;
  let fixture: ComponentFixture<PreparingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
