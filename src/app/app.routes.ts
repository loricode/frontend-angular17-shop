import { Routes } from '@angular/router';

//hompage - tienda
import { ShopComponent } from './presentation/pages/shop/shop.component';

//auth para dashboard
import { LoginComponent } from './presentation/pages/auth/login/login.component';

//dashboard
import { ProductComponent } from './presentation/pages/dashboard/product/product.component';
import { HomeComponent } from './presentation/pages/dashboard/home/home.component';

export const routes: Routes = [
   {
      path:'',
      component: ShopComponent
   },
   {
      path:'auth/login',
      component: LoginComponent
   },
   {
      path:'dashboard',
      loadComponent: () => import('./presentation/pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
      children:[
         {
            path:'',
            component: HomeComponent
         },
         {
           path:'sales',
           component: ProductComponent
        }
      ]
   }
];
