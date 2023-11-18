import  jwtDecode  from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let decodedtoken:any=jwtDecode(localStorage.getItem("token") as string);
      if(decodedtoken.exp>Date.now()/1000){
        return true;
      }else{
        this.route.navigateByUrl("/")
        return false;
      }
  }
  
}
