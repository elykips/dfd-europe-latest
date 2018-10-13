import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { EnquiriesRoutingModule } from "./enquiries-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EnquiriesComponent } from './enquiries.component';


@NgModule({
    imports: [
        CommonModule,
        EnquiriesRoutingModule,
        NgbModule,
    ],
    declarations: [
        EnquiriesComponent,
    ]
})
export class EnquiriesModule { }
