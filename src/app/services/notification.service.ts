import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notify:NotifierService) { }
  notifier=(message:string,type:string)=>{
    return this.notify.notify(type,message)
  }
}
