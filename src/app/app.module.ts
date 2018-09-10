import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from  '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeService } from './services/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';

export const firebaseConfig = {

  apiKey: "AIzaSyD3OhEIpnTBJ4_R0tepOmxvcbXlLeSSLFU",
  authDomain: "employeemanagement-9da67.firebaseapp.com",
  databaseURL: "https://employeemanagement-9da67.firebaseio.com",
  storageBucket: "employeemanagement-9da67.appspot.com",
  messagingSenderId: "195679725027"
};


const appRoutes : Routes=[
  {path:'',component:DashboradComponent},
  {path:'register',component: RegisterComponent},
  {path:'add-employee',component: AddEmployeeComponent},
  {path:'login',component: LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }