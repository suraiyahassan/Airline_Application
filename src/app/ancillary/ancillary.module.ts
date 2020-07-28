import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AncillaryRoutingModule } from './ancillary-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AncillaryComponent } from './components/ancillary/ancillary.component';


@NgModule({
  declarations: [AncillaryComponent],
  imports: [
    CommonModule,
    AncillaryRoutingModule,
    SharedModule
  ],
  exports: [
    AncillaryComponent
  ]
})
export class AncillaryModule { }
