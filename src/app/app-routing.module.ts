import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightListComponent } from './flights/components/flight-list/flight-list.component';
import { PassengerListComponent } from './passengers/components/passenger-list/passenger-list.component';
import { SeatsComponent } from './seats/components/seats/seats.component';
import { AncillaryComponent } from './ancillary/components/ancillary/ancillary.component';
import { MealsComponent } from './meals/components/meals/meals.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/components/home.component';

import { AuthGuardService } from './core/service/auth-guard.service';
import { LoginComponent } from './core/auth/login/component/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'signUp',
    loadChildren: () =>
      import('./core/auth/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  // {
  //   path: 'login',
    
  //   loadChildren: () =>
  //     import('./core/auth/login/login.module').then((m) => m.LoginModule),
  // },
   { path: 'login', component: LoginComponent},

  {
    path: 'flights',
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./flights/flights.module').then((m) => m.FlightsModule),
  },
  {
    path: 'passengers',
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./passengers/passengers.module').then((m) => m.PassengersModule),
  },
  {
    path: 'seats',
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./seats/seats.module').then((m) => m.SeatsModule),
  },
  {
    path: 'ancillary',
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./ancillary/ancillary.module').then((m) => m.AncillaryModule),
  },
  {
    path: 'meals',
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./meals/meals.module').then((m) => m.MealsModule),
  },
  {
    path: 'products',
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'home',
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
