import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AncillaryComponent } from './components/ancillary/ancillary.component';

const routes: Routes = [
  { path: '', component: AncillaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AncillaryRoutingModule {}
