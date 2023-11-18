import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  public registreform!:FormGroup;
  constructor(private formBuilder:FormBuilder,private authenticationService:AuthenticationService){}
  ngOnInit(): void {
    this.registreform=this.formBuilder.group({
      name:this.formBuilder.control("",[Validators.required,Validators.pattern("[a-zA-Z]*")]),
      email:this.formBuilder.control("",[Validators.email,Validators.required]),
      password:this.formBuilder.control("",[Validators.required,Validators.minLength(8)]),
    }
    )
  }
  Registre=()=>{
    return this.authenticationService.Registre(this.registreform.value)
  }
 
  

}
