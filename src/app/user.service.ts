import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import{Observable,BehaviorSubject} from'rxjs';
import {map} from 'rxjs/operators';
import{Router} from'@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {

private API_URL:string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(data:{}) {
    return this.http.post(`${this.API_URL}/register`,data);
  }

  login(data): Observable<any>

   {
    return this.http.post(`${this.API_URL}/login`,data);
  } 

  getAllUsers():any {
    var myCourses = this.http.get(`${this.API_URL}/users?page=1`)
   
     return myCourses;

     console.log(myCourses);
 }

  getResources():any {
    return this.http.get(`${this.API_URL}/unknown`)
  }

}
