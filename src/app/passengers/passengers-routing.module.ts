import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';


const routes: Routes = [
  { path: '', component: PassengerListComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengersRoutingModule { }
