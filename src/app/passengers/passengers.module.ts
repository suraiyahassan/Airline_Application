import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengersRoutingModule } from './passengers-routing.module';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ PassengerListComponent],
  imports: [CommonModule, PassengersRoutingModule, SharedModule],
  exports: [ PassengerListComponent],
})
export class PassengersModule {}
