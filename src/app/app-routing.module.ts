import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FlightListComponent } from './flights/components/flight-list/flight-list.component';
import { PassengerListComponent } from './passengers/components/passenger-list/passenger-list.component';
import { SeatsComponent } from './seats/components/seats/seats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightListComponent},
  { path: 'passengers', component: PassengerListComponent},
  { path: 'seats', component: SeatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
