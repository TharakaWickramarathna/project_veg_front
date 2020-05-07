import { SignUpPopupModalComponent } from './../signIn-signUp/signUp-popup-modal/sign-up-popup-modal/sign-up-popup-modal.component';
import { SignInPopupModalComponent } from './../signIn-signUp/signIn-popup-modal/sign-in-popup-modal/sign-in-popup-modal.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobile :boolean;
  innerWidth:number;

  si='';
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService,) { }

  openSignInModal(){
    this.modalRef = this.modalService.show(SignInPopupModalComponent, { 
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class:'modal-dialog-scrollable modal-md',
      containerClass: 'modal fade bottom',
      role:'document',
      animated: true,
      data: {
          heading: 'Add to cart Confirmation',
          content: { heading: 'Content heading', description: 'Content description'}
      } });

      this.modalRef.content.action.subscribe( (result: any) => { this.si=result; });
  }

  openSignUpModal(){
    this.modalRef = this.modalService.show(SignUpPopupModalComponent, { 
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class:'modal-dialog-scrollable modal-md',
      containerClass: 'modal fade bottom',
      role:'document',
      animated: true,
      data: {
          heading: 'Add to cart Confirmation',
          content: { heading: 'Content heading', description: 'Content description'}
      } });

      this.modalRef.content.action.subscribe( (result: any) => { this.si=result; });
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    //mobile responsive
    if(this.innerWidth<991){
      this.mobile=false;
    }
    else{
      this.mobile=true;
    }
  }

  //control size of navigation according to wondow size

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  
  if(this.innerWidth>=991){
    this.mobile=true;
  }

  if(this.innerWidth<991){
    this.mobile=false;
  }
  
}

}
