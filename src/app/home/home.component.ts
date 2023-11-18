import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public authForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthenticationService,private route:Router){}

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      let decodedtoken:any=jwtDecode(localStorage.getItem("token") as string);
      if(decodedtoken.exp>Date.now()/1000){
        this.route.navigateByUrl("/profile")
      }
    }
    
    this.authForm=this.formBuilder.group({
      email:this.formBuilder.control("",[Validators.required,Validators.email]),
      password:this.formBuilder.control("",Validators.required)
    })
  }

  Login=()=>{
    return this.authService.Login(this.authForm.value)
  }

}
