import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { DealerLayoutComponent } from "./layouts/dealer/dealer-layout.component";
import { GuestLayoutComponent } from "./layouts/guest/guest-layout.component";
import { DEALER_ROUTES } from "./shared/routes/dealer-layout.routes";
import { GUEST_ROUTES } from "./shared/routes/guest-layout.routes";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'guests',
    pathMatch: 'full',
  },
  { path: '', component: DealerLayoutComponent, data: { title: 'Dealer Views' }, children: DEALER_ROUTES },
  { path: '', component: GuestLayoutComponent, data: { title: 'Guest Views' }, children: GUEST_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
