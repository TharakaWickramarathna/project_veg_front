import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit-admin',
  templateUrl: './product-edit-admin.component.html',
  styleUrls: ['./product-edit-admin.component.scss']
})
export class ProductEditAdminComponent implements OnInit {
  productID:string;

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productID=this.route.snapshot.params['id'];
  }

}
