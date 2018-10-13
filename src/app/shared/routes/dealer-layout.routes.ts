import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const DEALER_ROUTES: Routes = [
  {
    path: 'dealers',
    loadChildren: './pages/dealer-layout-page/dealer-pages.module#DealerPagesModule'
  }

];