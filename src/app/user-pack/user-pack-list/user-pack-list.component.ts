import { UserPackDescriptionService } from './../../shared/services/user-pack-description.service';
import { UserPackService } from './../../shared/services/user-pack.service';
import { UserPackages } from './../../shared/models/userPackage.model';
import { ViewPopUpModelComponent } from './../view-pop-up-model/view-pop-up-model/view-pop-up-model.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Router, ActivatedRoute } from '@angular/router';
import { isObject } from 'util';


@Component({
  selector: 'app-user-pack-list',
  templateUrl: './user-pack-list.component.html',
  styleUrls: ['./user-pack-list.component.scss']
})
export class UserPackListComponent implements OnInit {

  list=[1,2,3,4,5];

  constructor(private router:Router,
              private modalService: MDBModalService,
              private userPackageService:UserPackService,
              private userPackDescriptionService:UserPackDescriptionService,
              private route:ActivatedRoute) { 
              }
  isLoading = false;

  pp='';
  modalRef: MDBModalRef;
  
  myPacks: UserPackages[];
  userID="5eaf18c4d82e71543ce00229";



  ngOnInit(): void {
    this.isLoading = true;
    this.userPackageService.fetchUserPackages(this.userID).subscribe((userpacks)=>{
      this.myPacks=userpacks;
      this.isLoading=false;
    },err => {
      console.log(err);
    });
  }

  
  openViewPackageModal(packageID) {
    this.modalRef = this.modalService.show(ViewPopUpModelComponent, { 
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
          content: { heading: 'Content heading', description: 'Content description', packageID:packageID}
      } });

      this.modalRef.content.action.subscribe( (result: any) => { this.pp=result; });
      
  }

  onCreatClick(){
    this.router.navigate(['userpacks','create'])
  }

  onEditClick(packageID){
    this.router.navigate(['userpacks',packageID,'editpack']);

  }

  onDeleteclick(packageID){
    console.log(packageID);
    this.modalRef.hide();
  }




}
