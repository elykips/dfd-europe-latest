import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailNotificationService } from 'app/services/email-notification/email-notification.service';
import { ToastrService } from 'app/services/toastr/toastr.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  //declare talkToUs FormGroup
  talkToUs:FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private emailNotification: EmailNotificationService,
    private toastrService: ToastrService,
    private router: Router) {

     }

  ngOnInit() {
    this.talkToUs = this.formBuilder.group({
      CONTACT_PERSON_NAME: new FormControl('', Validators.required),
      CONTACT_PERSON_EMAIL: new FormControl('',  Validators.required &&  Validators.email  ),
      CLIENT_CATEGORY: new FormControl('', Validators.required),
      DEALERSHIP_NAME: new FormControl(''),
      CAPACITY_CARS: new FormControl(''),
      CAPACITY_STAFF: new FormControl(''),
      CITY: new FormControl('', Validators.required ),
      ADDRESS: new FormControl('', Validators.required ),
      INQUIRY: new FormControl('', Validators.required ) })
  }

  // geters for talkToUs form  controls 

  get name(){
    return this.talkToUs.get('CONTACT_PERSON_NAME')
  }

  get email(){
    return this.talkToUs.get('CONTACT_PERSON_EMAIL')
  }

  get client_category(){
    return this.talkToUs.get('CLIENT_CATEGORY')
  }

  get dealership(){
    return this.talkToUs.get('DEALERSHIP_NAME')
  }

  get capacity_cars(){
    return this.talkToUs.get('CAPACITY_CARS')
  }

  get capacity_staff(){
    return this.talkToUs.get('CAPACITY_STAFF')
  }

  get city(){
    return this.talkToUs.get('CITY')
  }

  get address(){
    return this.talkToUs.get('ADDRESS')
  }

  get inquiry(){
    return this.talkToUs.get('INQUIRY')
  }

  // geter for  talkToUs form values 

  get talkToUsEmail(){
    return {
      sender: this.name.value,
      sender_email: this.email.value,
      category: this.client_category.value,
      company: this.dealership.value,
      capacity_cars: this.capacity_cars.value,
      capacity_staff: this.capacity_staff.value,
      city: this.city.value,
      address: this.address.value,
      body: this.inquiry.value
    }
  }


  contactUs(){
    this.emailNotification.contactUs(this.talkToUsEmail)
    this.toastrService.typeSuccess()
  }
}
