import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  public token:string = "";
  constructor() {}
 
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem("token")?? "";
    console.log(request);
    if (this.token !="") {
      if(!request.headers.has("Authorization")){
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
      }
    }
    
    console.log(request);
    return next.handle(request);
  
}
}
