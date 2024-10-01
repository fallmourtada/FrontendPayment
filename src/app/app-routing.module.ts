import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { NewPaymentsComponent } from './payments/new-payments/new-payments.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { DetailsPaymentComponent } from './payments/details-payment/details-payment.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"navbar",component:NavbarComponent,canActivate:[AuthenticationGuard],children:[
    {path:"home",component:HomeComponent},
    {path:"loadStudents",component:LoadStudentsComponent},
    {path:"loadPayments",component:LoadPaymentsComponent},
    {path:"students",component:StudentsComponent},
    {path:"payments",component:PaymentsComponent},
    {path:"profile",component:ProfileComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"student-detail/:code",component:StudentDetailComponent},
    {path:"new-payment/:studentCode",component:NewPaymentsComponent},
    {path:"details-payment/:id",component:DetailsPaymentComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
