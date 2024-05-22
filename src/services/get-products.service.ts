import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<any[]>(environment.apiUrl + environment.endpoints.getAllProducts)
  }
  getProductBycat(category:string){
    return this.http.get<any[]>(environment.apiUrl + environment.endpoints.singleproduct + category);
  }
}
