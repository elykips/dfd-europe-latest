// import modules
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import components
import { AppComponent } from './app.component';
import { GuestLayoutComponent } from "./layouts/guest/guest-layout.component";
import { DealerLayoutComponent } from './layouts/dealer/dealer-layout.component';

// import services
import { AuthService } from './services/auth/auth.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ToastrService } from './services/toastr/toastr.service';
import { ToastsManager, ToastOptions, ToastModule } from 'ng2-toastr';
import { CarService } from './services/car/car.service';
import { EmailNotificationService } from './services/email-notification/email-notification.service';
import { DealerService } from './services/dealer/dealer.service';


@NgModule({
    declarations: [
        AppComponent,
        DealerLayoutComponent,
        GuestLayoutComponent,

    ],
    imports: [
BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        ToastModule.forRoot(),
        FormsModule,
        NgbModule.forRoot()
    ],
    providers: [
        AuthService,
        FormBuilder,
        ToastrService,
        ToastsManager,
        ToastOptions,
        CarService,
        EmailNotificationService,
        DealerService
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }