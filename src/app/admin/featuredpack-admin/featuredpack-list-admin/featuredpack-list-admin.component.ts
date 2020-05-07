import { PackageDescription } from './../../../shared/packageDescription.models';
import { PackageDescriptionService } from 'src/app/shared/services/package-description.service';
import { PackagesService } from './../../../shared/services/packages.service';
import { Packages } from './../../../shared/packages.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featuredpack-list-admin',
  templateUrl: './featuredpack-list-admin.component.html',
  styleUrls: ['./featuredpack-list-admin.component.scss']
})
export class FeaturedpackListAdminComponent implements OnInit {

  packages: Packages[];
  packageDes: PackageDescription[];

  constructor(private packageservive:PackagesService,
              private packagedesservice:PackageDescriptionService,
              private router:Router) { }

  ngOnInit(): void {
    this.packages = this.packageservive.getProducts();
    this.packageDes = this.packagedesservice.getPackagesDescriptions();
  }

  onCreateClick(){
    this.router.navigate(['admin','featuredpacksadmin','createpack'])
  }

  onClickPack(packageID){
    this.router.navigate(['admin','featuredpacksadmin',packageID,'editPack']);
  }

}
