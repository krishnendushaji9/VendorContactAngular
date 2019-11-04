import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vendorcontact } from './vendorcontact';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  

  constructor(private httpService:HttpClient) { }

  getVendor(Id: number):Observable<any>{
    return this.httpService.get(environment.apiUrl+'/listbyid/'+Id);
  }

  duplicate(phone:Number,email:String):any{
    return this.httpService.get<Vendorcontact[]>(environment.apiUrl+'/duplication/'+phone+'/'+email)

  }

  createVendor(vendor:Object):Observable<any>{
    return this.httpService.post(environment.apiUrl+'/insert',vendor);
  }

  update(Id:number, vendor:Vendorcontact):Observable<any>{
    return this.httpService.put(environment.apiUrl+'/update/'+Id,vendor);
  }

  delete(Id:number, vendor:Vendorcontact):Observable<any>{
    return this.httpService.put(environment.apiUrl+'/disable/'+Id,vendor);

  }

  search(searchstring:String ):Observable<Vendorcontact[]>{
    return this.httpService.get<Vendorcontact[]>(environment.apiUrl+'/search/'+searchstring);
  }
  getList():Observable<any>{
    return this.httpService.get(environment.apiUrl+'/list');
  }

 
}