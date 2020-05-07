import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


import { AuthService} from "../../../admin/shared/services/auth.service";



@Component({
  selector: 'app-sign-up-popup-modal',
  templateUrl: './sign-up-popup-modal.component.html',
  styleUrls: ['./sign-up-popup-modal.component.scss']
})
export class SignUpPopupModalComponent implements OnInit {

  userForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    homeNumber: new FormControl(''),
    addressLine1: new FormControl(''),
    addressLine2: new FormControl(''),
    addressLine3: new FormControl(''),
    postalCode: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl('')
  });

  validatingForm: FormGroup;
  
  

  constructor(
    public modalRef: MDBModalRef,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      signupFormModalFirstName: new FormControl('', Validators.required),
      signupFormModalLastName: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalMobileNumber: new FormControl('', Validators.required),
      signupFormModalHomeNumber: new FormControl('', Validators.required),
      signupFormModalAddress1: new FormControl('', Validators.required),
      signupFormModalAddress2: new FormControl('', Validators.required),
      signupFormModalAddress3: new FormControl('', Validators.required),
      signupFormModalPostalCode: new FormControl('', Validators.required),
      signupFormModalPassword: new FormControl('', Validators.required),
      signupFormModalRePassword: new FormControl('', Validators.required),
    });
  }

  openSignIn(){
      // this.router.navigate('/');
  }

  get signupFormModalFirstName() {
    return this.validatingForm.get('signupFormModalFirstName');
  }

  get signupFormModalLastName() {
    return this.validatingForm.get('signupFormModalLastName');
  }

  get signupFormModalMobileNumber() {
    return this.validatingForm.get('signupFormModalMobileNumber');
  }
  get signupFormModalHomeNumber() {
    return this.validatingForm.get('signupFormModalHomeNumber');
  }

  get signupFormModalAddress1() {
    return this.validatingForm.get('signupFormModalAddress1');
  }
  get signupFormModalAddress2() {
    return this.validatingForm.get('signupFormModalAddress2');
  }
  get signupFormModalAddress3() {
    return this.validatingForm.get('signupFormModalAddress3');
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }
  get signupFormModalPostalCode() {
    return this.validatingForm.get('signupFormModalPostalCode');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }
  get signupFormModalRePassword() {
    return this.validatingForm.get('signupFormModalRePassword');
  }

  registerUser(){
    let password = this.userForm.value.password;
    let repassword = this.userForm.value.repassword;
    if (password === repassword) {
      this.authService.registerUser(this.userForm.value).subscribe(
        data => {console.log(data)},
        err => console.log(err)
      );
    }else{
      console.log("Password does not match....")
    }
  }

  updateUser(id){
    // console.log(this.userForm.value);
    this.authService.updateUser(id).subscribe(
      data => {console.log(data)},
      err => console.log(err)
    );

  }

  deleteUser(id){
    // console.log(this.userForm.value);
    this.authService.deleteUser(id).subscribe(
      data => {console.log(data)},
      err => console.log(err)
    );

  }

  getAllUser(){
    // console.log(this.userForm.value);
    this.authService.getAllUser().subscribe(
      data => {console.log(data)},
      err => console.log(err)
    );

  }

}
