import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<any[]>(environment.apiUrl + environment.endpoints.getAllCategories)
  }
}
