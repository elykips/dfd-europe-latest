import { Injectable } from '@angular/core';

@Injectable()
export class EmailNotificationService {

  constructor() { }

  contactUs(msg){
    console.log('New Enquiry From: ', msg.sender )
    console.log("Body:", msg)
  }

  signUp(msg){
    console.log('New Sign Up: ', msg.sender )
    console.log("Body:", msg)
  }

  newCar(msg){
    console.log("New Car Uploaded By:", msg.sender)
    console.log('Body:', msg)
  }
}
