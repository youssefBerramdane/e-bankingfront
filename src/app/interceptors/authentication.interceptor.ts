import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes("login") || request.url.includes("registre")){
      return next.handle(request);
    }else{
      let newReq=request.clone({headers:request.headers.set("Authorization","Bearer "+window.localStorage.getItem("token"))})
      return next.handle(newReq).pipe(
        catchError((error: HttpErrorResponse) => {
        // Handle the error globally here
        if(error.status==401){
          window.localStorage.removeItem("token")
          this.route.navigateByUrl("/")
        }

        // Rethrow the error or return a new observable with an error
        return throwError(error);
        }))
    }
    
    
  }
}
