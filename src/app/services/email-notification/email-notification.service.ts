import { Injectable } from '@angular/core';

@Injectable()
export class EmailNotificationService {

  constructor() { }

  contactUs(msg){
    console.log('New Enquiry From: ', msg.sender )
    console.log("Body:", msg)
  }

}
