import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http:HttpClient) { }

  getSingleUser(){
    return this.http.get<any[]>(environment.apiUrl + environment.endpoints.getSingleUser)
  }
}
