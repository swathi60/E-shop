import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
     {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'contactus', loadComponent: () => import('./contactus/contactus.component').then(m => m.ContactusComponent)},
   ];
