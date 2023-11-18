import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticationInfos:any={
    token:"",
    role:"",
    username:"",
    isAuth:false
  }

  constructor(private http:HttpClient,private notificationService:NotificationService,private route:Router) { }

  Login=(authform:any)=>{
    
    let formdata=new FormData()
    formdata.append("email",authform.email)
    formdata.append("password",authform.password)
    this.http.post("https://back-gjrg.onrender.com/login",formdata).subscribe({
      next:(data:any)=>{
        window.localStorage.setItem("token",data.token)
        this.authenticationInfos.token=data.token;
        let decodedjwt:any=jwtDecode(data.token)
        this.authenticationInfos.username=decodedjwt.sub
        this.authenticationInfos.role=decodedjwt.scope
        this.authenticationInfos.isAuth=true
        this.route.navigateByUrl("/profile")
      
      },
      error:err=>{this.notificationService.notifier("Email ou mote de passe incorrect","error")}
    })
  }
  Registre=(registreForm:any)=>{
    let formData=new FormData();
    formData.append("name",registreForm.name);
    formData.append("email",registreForm.email);
    formData.append("password",registreForm.password);
    this.http.post("https://back-gjrg.onrender.com/registre",formData).subscribe({
      next:data=>{
        this.notificationService.notifier("Votre demmande ne train de traiter merci","success");
      this.route.navigateByUrl("/")},
      error:err=>{this.notificationService.notifier("Email deja est utilisé","error")}
    })
  }
}
