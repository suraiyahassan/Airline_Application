import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { FlightListComponent } from './flight-list/flight-list.component';
import { SharedModule } from '../shared/shared.module';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightSeatMapComponent } from './flight-details/flight-seat-map/flight-seat-map.component';
import { PassengerDetailsComponent } from './flight-details/passenger-details/passenger-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FlightListComponent,
    FlightDetailsComponent,
    FlightSeatMapComponent,
    PassengerDetailsComponent,
  ],
  imports: [CommonModule, CheckInRoutingModule, SharedModule],
  exports: [
    FlightListComponent,
    FlightDetailsComponent
  ],
  providers: [],
})
export class CheckInModule {}
