import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengersRoutingModule } from './passengers-routing.module';
import { PassengerComponent } from './components/passenger/passenger.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PassengerComponent, PassengerListComponent],
  imports: [CommonModule, PassengersRoutingModule, SharedModule],
  exports: [PassengerComponent, PassengerListComponent],
})
export class PassengersModule {}
