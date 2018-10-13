import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerLayoutPageComponent } from './dealer-layout-page.component';
import { OverviewComponent } from './overview/overview.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { NewCarComponent } from './new-car/new-car.component';

const routes: Routes = [
  {
    path: '',
     component: DealerLayoutPageComponent,
    data: {
      title: 'Dealer Layout Page'
    },    
  },
  {
    path: 'overview',
     component: OverviewComponent,
    data: {
      title: 'Overview'
    },    
  },
  {
    path: 'orders',
     component: OrdersComponent,
    data: {
      title: 'Orders'
    },    
  },
  {
    path: 'inventory',
     component: InventoryComponent,
    data: {
      title: 'Orders'
    },    
  },
  {
    path: 'enquiries',
     component: EnquiriesComponent,
    data: {
      title: 'Orders'
    },    
  },
  {
    path: 'profiles',
     component: ProfilesComponent,
    data: {
      title: 'Profiles'
    },    
  },
  {
    path: 'new-car',
     component: NewCarComponent,
    data: {
      title: 'New Car'
    },    
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerPagesRoutingModule { }
