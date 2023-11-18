import jwtDecode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-tamplate',
  templateUrl: './profile-tamplate.component.html',
  styleUrls: ['./profile-tamplate.component.css']
})
export class ProfileTamplateComponent implements OnInit {
  constructor(public authService:AuthenticationService,private route:Router){}
  ngOnInit(): void {
    
    let token=window.localStorage.getItem("token");
    let decodedtoken:any=jwtDecode(token as string)
    if(decodedtoken.exp<Date.now()/1000){
      window.localStorage.removeItem("token")
      this.authService.authenticationInfos={}
      this.route.navigateByUrl("/")
    }else{
      this.authService.authenticationInfos.token=token
      this.authService.authenticationInfos.username=decodedtoken.sub
      this.authService.authenticationInfos.role=decodedtoken.scope
      this.authService.authenticationInfos.isAuth=true
    }
  }
  LogOut=()=>{
    this.authService.authenticationInfos={}
    localStorage.removeItem("token")
    this.route.navigateByUrl("/")
  }

}
