import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FlightListComponent } from './check-in/flight-list/flight-list.component';
import { FlightSeatMapComponent } from './check-in/flight-details/flight-seat-map/flight-seat-map.component';
import { FlightDetailsComponent } from './check-in/flight-details/flight-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'checkIn', component: FlightListComponent },
  { path: 'checkIn/flightDetails', component: FlightDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
