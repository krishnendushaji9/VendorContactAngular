import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Vendorcontact } from '../vendorcontact';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorListComponent implements OnInit {

  public popoverTitle:string ='Disable';
  public popoverMessage:string ='Do you want to diable  ?';
  public popoverMessageLogout:string ='Do you want to logout  ?';
  public confirmClicked: boolean= false;
  public cancelClicked:boolean=false;

  vendors:Observable<Vendorcontact[]>
  
  constructor(private vendorService:VendorService,private authService:AuthService,
                private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.vendors = this.vendorService.getList();
    this.vendorService.getList();
  }

  deleteVendor(Id: number,vendorcontact:Vendorcontact){
    this.vendorService.delete(Id,vendorcontact)
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
    }

  

  update(Id:number,vendorcontact:Vendorcontact){
  console.log(Id);
  this.router.navigate(['update',Id]);
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}