import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPopupModalComponent } from './sign-in-popup-modal.component';

describe('SignInPopupModalComponent', () => {
  let component: SignInPopupModalComponent;
  let fixture: ComponentFixture<SignInPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
