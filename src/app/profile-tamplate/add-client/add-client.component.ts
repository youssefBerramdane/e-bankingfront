import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  public addClientForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private clientService:ClientService){}
  ngOnInit(): void {
    this.addClientForm=this.formBuilder.group({
      name:this.formBuilder.control("",Validators.required),
      email:this.formBuilder.control("",Validators.email),
      password:this.formBuilder.control("",Validators.minLength(8)),
      solde:this.formBuilder.control("",Validators.pattern("[0-9]*"))
    })
  }
  addclient=()=>{
      return this.clientService.AddNewClient(this.addClientForm.value)
  }
  

}
