import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GuestPagesRoutingModule } from "./guest-pages-routing.module";
import { GuestLayoutPageComponent } from './guest-layout-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { CarDetailsComponent } from './car-details/car-details.component';
  

@NgModule({
    imports: [
    CommonModule,
        GuestPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,     
    ],
    declarations: [
        GuestLayoutPageComponent,
        AvailableCarsComponent,
        AboutUsComponent,
        SigninComponent,
        SignupComponent,
        CarDetailsComponent
    ]
})
export class GuestPagesModule { }
