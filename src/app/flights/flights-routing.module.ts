import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightListComponent } from './components/flight-list/flight-list.component';



const routes: Routes = [
  { path: '', component: FlightListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
 