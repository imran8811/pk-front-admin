import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.components';
import { LoginComponent } from './components/login/login.components';
import { AddProductComponent } from './components/add-product/add-product.components';
import { CatsComponent } from './components/cats/cats.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.components';
import { HeaderComponent } from './components/header/header.components';
import { FooterComponent } from './components/footer/footer.components';

const routes: Routes = [
  { path: '', component : DashboardComponent },
  { path: 'login', component : LoginComponent },
  { path: 'add-product', component : AddProductComponent },
  { path: 'cats', component : CatsComponent },
  { path: 'orders', component : OrdersComponent },
  { path: 'signup', component : SignupComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const COMPONENTS_LIST = [
  DashboardComponent,
  LoginComponent,
  AddProductComponent,
  CatsComponent,
  OrdersComponent,
  SignupComponent,
  HeaderComponent,
  FooterComponent
]
