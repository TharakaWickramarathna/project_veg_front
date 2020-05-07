import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in-popup-modal',
  templateUrl: './sign-in-popup-modal.component.html',
  styleUrls: ['./sign-in-popup-modal.component.scss']
})
export class SignInPopupModalComponent implements OnInit {

  validatingForm: FormGroup;

  constructor(public modalRef: MDBModalRef,) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  openSignUp(){
    // return this.header.openSignUpModal();
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

}
