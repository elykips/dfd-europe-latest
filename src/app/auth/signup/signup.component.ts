import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//import services
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from '../../services/toastr/toastr.service';

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
    private auth: AuthService,
    private toastrService: ToastrService) { 

    }

  ngOnInit() {
    this.dealerForm = this.formBuilder.group({
      dealer: new FormControl('', Validators.required),
      shortDescription: new FormControl('Description To Be Updated', Validators.minLength(3)),
      category: new FormControl('', Validators.required),
      address: new FormControl('Address To Be Updated'),
      phoneNumber: new FormControl('Phone Number To Be Updated'),
      email: new FormControl('', Validators.required && Validators.email),
      password: new FormControl('', Validators.required && Validators.minLength(8)),

    });

  }


   //get methods for mobile money form
   get dealer(){
    return this.dealerForm.get('dealer')
  }

  get shortDescription(){
    return this.dealerForm.get('shortDescription')
  }

  get category(){
    return this.dealerForm.get('category')
  }

  get address(){
    return this.dealerForm.get('address')
  }

  get phoneNumber(){
    return this.dealerForm.get('phoneNumber')
  }

  get email(){
    return this.dealerForm.get('email')
  }

  get password(){
    return this.dealerForm.get('password')
  }

  // Dealer Object
  get dealerProfile(){
    return this.dealerForm.value
  }

  registerDealer(){
    this.auth.createDealerProfile(this.dealerProfile)
    this.toastrService.typeSuccess()
    this.router.navigate(['/guests/sign-in'])
  }



}
