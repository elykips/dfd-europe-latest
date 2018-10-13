import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from '../../services/toastr/toastr.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [ToastrService]
})
export class SigninComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private service: ToastrService) {
      
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required && Validators.email),
      password: new FormControl('', Validators.required && Validators.minLength(8)),
    });
  }


  // geters form the form controls
  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  // geter for credentials object
  get credentials(){
    return this.loginForm.value
  }

  signIn(){
    this.auth.startSesion(this.credentials)
    this.service.typeSuccess()
    this.router.navigate(['/dealers'])
  }


}
