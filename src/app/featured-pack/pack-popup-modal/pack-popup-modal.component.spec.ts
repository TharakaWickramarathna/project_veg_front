import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackPopupModalComponent } from './pack-popup-modal.component';

describe('PackPopupModalComponent', () => {
  let component: PackPopupModalComponent;
  let fixture: ComponentFixture<PackPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
