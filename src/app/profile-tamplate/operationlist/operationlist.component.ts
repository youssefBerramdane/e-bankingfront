import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-operationlist',
  templateUrl: './operationlist.component.html',
  styleUrls: ['./operationlist.component.css']
})
export class OperationlistComponent implements OnInit {
  public operationList:any[]=[];
  constructor(public clientService:ClientService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.clientService.getOperationsList(this.route.snapshot.params["id"]).subscribe({
      next:(data:any)=>{
        this.operationList=data
        console.log(data)
      },
      error:err=>{console.log(err)}
    });
  }

}
