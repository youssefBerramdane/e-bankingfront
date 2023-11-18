import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public transfereForm!:FormGroup;
  constructor(public clientService:ClientService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.transfereForm=this.formBuilder.group({
      id:this.formBuilder.control("",[Validators.required,Validators.pattern("[0-9]*")]),
      montant:this.formBuilder.control("",[Validators.required,Validators.pattern("[0-9]*")])
    })
    this.clientService.getclientData();
  }
  SubmitTransfere=()=>{
    this.clientService.SubmitTransfere(this.transfereForm.value)
  }

}
