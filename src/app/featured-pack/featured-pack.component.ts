import { PackageDescription } from './../shared/packageDescription.models';
import { PackageDescriptionService } from './../shared/services/package-description.service';
import { Packages } from './../shared/packages.model';
import { Component, OnInit} from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { PackPopupModalComponent } from './pack-popup-modal/pack-popup-modal.component';
import { PackagesService } from '../shared/services/packages.service';


@Component({
  selector: 'app-featured-pack',
  templateUrl: './featured-pack.component.html',
  styleUrls: ['./featured-pack.component.scss']
})
export class FeaturedPackComponent implements OnInit {

 // productList: UserPackDescription[];

  pp = '';
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService,
    private packageService: PackagesService,
    private packageDescriptionService: PackageDescriptionService) {
      this.packageService.packageschanged.subscribe((packages)=>{
        this.cards = packages;
      });
     }

  openPackageModal(_id) {
    this.modalRef = this.modalService.show(PackPopupModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-dialog-scrollable modal-md',
      containerClass: 'modal fade bottom',
      role: 'document',
      animated: true,
      data: {
        heading: 'Add to cart Confirmation',
        content: { heading: 'Content heading', description: 'Content description', _id: _id }
      }
    });

    this.modalRef.content.action.subscribe((result: any) => { this.pp = result; });

  }

  cards: Packages[];
 // cardsDes: PackageDescription[];

  result: PackageDescription[];

  ngOnInit(): void {
    this.cards = this.packageService.getProducts();
  //  this.cardsDes = this.packageDescriptionService.getPackagesDescriptions();

  }

}
