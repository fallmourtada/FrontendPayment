import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // For Datepicker
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppInterceptor } from './interceptors/app.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { CommonModule } from '@angular/common';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { NewPaymentsComponent } from './payments/new-payments/new-payments.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DetailsPaymentComponent } from './payments/details-payment/details-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    LoadStudentsComponent,
    LoadPaymentsComponent,
    LoginComponent,
    StudentsComponent,
    DashboardComponent,
    PaymentsComponent,
    NewPaymentsComponent,
    StudentDetailComponent,
    DetailsPaymentComponent,
    
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    PdfViewerModule
    
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AppInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
