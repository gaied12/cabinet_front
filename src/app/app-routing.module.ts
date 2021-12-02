import { AllRendezVousComponent } from './all-rendez-vous/all-rendez-vous.component';
import { AddMettingComponent } from './add-metting/add-metting.component';
import { LogOutComponent } from './log-out/log-out.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  {path: 'home',component: HomeComponent},
  {path: 'rendez-vous',component: RendezVousComponent,  canActivate: [AuthGuard]},
  {path: 'all-rendez-vous',component:AllRendezVousComponent, canActivate: [AuthGuard]},

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: 'log-out',component: LogOutComponent},
  {path: 'add-metting/:doctorId',component: AddMettingComponent},




  { path: '**', component: NotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
