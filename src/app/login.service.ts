import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './_modles/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  login(user:User){
    return this.http.post<object>('http://localhost:8080/login',user);
  }
  constructor(public http:HttpClient) { }
}
