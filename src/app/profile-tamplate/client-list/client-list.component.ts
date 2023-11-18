import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(public clientService:ClientService){}
  ngOnInit(): void {
    this.clientService.getListCients();
  }
  DeleteClient=(clientID:any)=>{
      return this.clientService.deleteClient(clientID);
  }

  ValiderUser(id:number) {
    return this.clientService.ValideUser(id);
    }
    SupprimmerUser(id:number) {
    return this.clientService.SupprimerUser(id);
    }

}
