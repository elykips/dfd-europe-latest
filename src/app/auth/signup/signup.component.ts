import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//import services
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from '../../services/toastr/toastr.service';
import { EmailNotificationService } from 'app/services/email-notification/email-notification.service';
import { DealerService } from 'app/services/dealer/dealer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ToastrService]
})
export class SignupComponent implements OnInit {

  // important variables
  errorMessage: string;
  successMessage: string;

  //initialize a from group
  public dealerForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dealerService: DealerService,
    private emailNotification: EmailNotificationService,
    private toastrService: ToastrService) { 

    }

  ngOnInit() {
    this.dealerForm = this.formBuilder.group({
      CONTACT_PERSON: new FormControl('', Validators.required),
      DEALERSHIP_NAME: new FormControl('', Validators.required),
      CATEGORY: new FormControl('', Validators.required),
      CAR_BRANDS_SOLD: new FormControl('', Validators.required),
      CAPACITY_CARS: new FormControl(''),
      CAPACITY_STAFF: new FormControl(''),
      CITY: new FormControl('', Validators.required),
      ADDRESS: new FormControl('', Validators.required),
      CONTACT_EMAIL: new FormControl('', Validators.required && Validators.email),
      CONTACT_PASSWORD: new FormControl('', Validators.required && Validators.minLength(8)),

    });

  }


   //get methods for Signup form
   get contact_person(){
    return this.dealerForm.get('CONTACT_PERSON')
  }

  get dealership(){
    return this.dealerForm.get('DEALERSHIP_NAME')
  }

  get category(){
    return this.dealerForm.get('CATEGORY')
  }

  get car_brands_sold(){
    return this.dealerForm.get('CAR_BRANDS_SOLD')
  }

  get capacity_cars(){
    return this.dealerForm.get('CAPACITY_CARS')
  }

  get capacity_staff(){
    return this.dealerForm.get('CAPACITY_STAFF')
  }

  get city(){
    return this.dealerForm.get('CITY')
  }

  get address(){
    return this.dealerForm.get('ADDRESS')
  }

  get email(){
    return this.dealerForm.get('CONTACT_EMAIL')
  }

  get password(){
    return this.dealerForm.get('CONTACT_PASSWORD')
  }

  // Dealer Object
  get dealerProfile(){
    return this.dealerForm.value
  }

  get signUpEmail(){
    return {
      sender: this.contact_person.value,
      body: this.dealerForm.value

    }
  }

  registerDealer(){
    this.dealerService.registerNewClient(this.dealerProfile)
    this.sendNewSignupEmail()
    this.toastrService.typeSuccess()
    this.redirectAfterSignUp()
    
    
  }

  sendNewSignupEmail(){
    this.emailNotification.signUp(this.signUpEmail)
  }

  redirectAfterSignUp(){
    this.router.navigate(['/guests/sign-in'])
  }



}
