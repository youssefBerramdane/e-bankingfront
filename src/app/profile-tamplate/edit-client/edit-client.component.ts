import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  public editClientForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,public clientService:ClientService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.clientService.geclientData(this.route.snapshot.params["id"]).subscribe({
      next:(data:any)=>{
        console.log(data)
          this.editClientForm=this.formBuilder.group({
            email:this.formBuilder.control(data.email,Validators.email),
            name:this.formBuilder.control(data.name),
            solde:this.formBuilder.control(data.solde,Validators.pattern("[0-9]*")),
            password:this.formBuilder.control("")
          })

      },
      error:err=>{this.router.navigateByUrl("/profile/clientList")}
    })
    
  }

  
  editclient=()=>{
    return this.clientService.EditClient(this.editClientForm.value,this.route.snapshot.params["id"]);
  }

}
