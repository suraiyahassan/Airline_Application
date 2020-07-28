import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatsRoutingModule } from './seats-routing.module';
import { SeatsComponent } from './components/seats/seats.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [SeatsComponent],
  imports: [CommonModule, SharedModule, SeatsRoutingModule],
  exports: [SeatsComponent],
})
export class SeatsModule {}
