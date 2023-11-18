import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
 
  geclientDatas(arg0: any) {
    throw new Error('Method not implemented.');
  }
  public clientList:any[]=[];
  public currentClient:any;

  constructor(private http:HttpClient,private notificationSErvice:NotificationService,private route:Router) { }
  getListCients=()=>{
    return this.http.get("https://back-gjrg.onrender.com/listclinets").subscribe({
      next:(data:any)=>{
      this.clientList=data
        console.log(data)
    },
      error:err=>{console.log(err)}
    })
  }
  AddNewClient=(clientinfo:any)=>{
    let formdata=new FormData();
    formdata.append("name",clientinfo.name);
    formdata.append("solde",clientinfo.solde);
    formdata.append("password",clientinfo.password);
    formdata.append("email",clientinfo.email);
    console.log(clientinfo)
    return this.http.post("https://back-gjrg.onrender.com/newclient",formdata).subscribe({
      next:data=>{
        this.notificationSErvice.notifier("Client est enregistré ","success");
        this.route.navigateByUrl("/profile/clientList")},
      error:err=>{
        this.notificationSErvice.notifier(err.error,"error")}
    })
  }
  deleteClient=(clientId:any)=>{
    return this.http.delete("https://back-gjrg.onrender.com/delete/"+clientId).subscribe({
      next:data=>{console.log(data);
      this.getListCients()},
      error:err=>{console.log(err)}
    })
  }
  getclientData=()=>{
    return this.http.get("https://back-gjrg.onrender.com/mydata").subscribe({
      next:data=>{
        this.currentClient=data
        console.log(data)},
      error:err=>{console.log(err)}
    })
  }
  SubmitTransfere=(transfereInfos:any)=>{
    let formData=new FormData();
    formData.append("id",transfereInfos.id);
    formData.append("montant",transfereInfos.montant)
    return this.http.post("https://back-gjrg.onrender.com/transfere",formData).subscribe({
      next:(data:any)=>{
        this.notificationSErvice.notifier(data.message,"success")
      this.getclientData()},
      error:err=>{this.notificationSErvice.notifier(err.error.message,"error")}
    })
  }
  geclientData=(id:number)=>{
      return this.http.get("https://back-gjrg.onrender.com/clientdata/"+id)
  }
  EditClient=(dataclient:any,id:number)=>{
    let formData=new FormData()
    formData.append("name",dataclient.name)
    formData.append("email",dataclient.email)
    formData.append("solde",dataclient.solde)
    formData.append("password",dataclient.password)
    return this.http.put("https://back-gjrg.onrender.com/editclient/"+id,formData).subscribe({
      next:data=>{this.route.navigateByUrl("/profile/clientList")},
      error:err=>[console.log(err)]
    })
  }
  ValideUser(id: number) {
    
    return this.http.put("https://back-gjrg.onrender.com/validclient/"+id,{}).subscribe({
      next:data=>{this.route.navigateByUrl("/profile/clientList")},
      error:err=>{console.log(err)}
    })
  }
  SupprimerUser(id: number) {
    this.deleteClient(id)
  }
  getOperationsList(id: any) {
    return this.http.get("https://back-gjrg.onrender.com/operaionslist/"+id)
  }
}
