import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestLayoutPageComponent } from './guest-layout-page.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import { CarDetailsComponent } from './car-details/car-details.component';




const routes: Routes = [
  {
    path: '',
     component: GuestLayoutPageComponent,
    data: {
      title: 'Guest Layout page'
    },    
  },
  {
    path: 'about-us',
     component: AboutUsComponent,
    data: {
      title: 'About Us'
    },    
  },
  {
    path: 'sign-in',
     component: SigninComponent,
    data: {
      title: 'Sign In'
    },    
  },
  {
    path: 'sign-up',
     component: SignupComponent,
    data: {
      title: 'Sign In'
    },    
  },
  {
    path: 'cars',
     component: AvailableCarsComponent,
    data: {
      title: 'Sign In'
    },    
  },
  {
    path: 'cars/:vin',
     component: CarDetailsComponent,
    data: {
      title: 'Car Details'
    },    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class GuestPagesRoutingModule { }
