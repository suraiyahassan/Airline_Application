import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatsComponent } from './components/seats/seats.component';

const routes: Routes = [
  { path: '', component: SeatsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatsRoutingModule { }
