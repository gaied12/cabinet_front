import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LogOutComponent } from './log-out/log-out.component';
import { AddMettingComponent } from './add-metting/add-metting.component';
import { AllRendezVousComponent } from './all-rendez-vous/all-rendez-vous.component';


@NgModule({
  declarations: [
    AppComponent,
    RendezVousComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    LogOutComponent,
    AddMettingComponent,
    AllRendezVousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
