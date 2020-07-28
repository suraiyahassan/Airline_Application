import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FlightListComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    SharedModule
  ],
  exports:
  [
    FlightListComponent
  ]
})
export class FlightsModule { }
