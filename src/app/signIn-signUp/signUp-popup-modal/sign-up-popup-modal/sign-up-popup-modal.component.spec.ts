import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPopupModalComponent } from './sign-up-popup-modal.component';

describe('SignUpPopupModalComponent', () => {
  let component: SignUpPopupModalComponent;
  let fixture: ComponentFixture<SignUpPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
