import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';


import { FlightsModule } from './flights/flights.module';
import { PassengersModule } from './passengers/passengers.module';
import { SeatsModule } from './seats/seats.module';
import { AncillaryModule } from './ancillary/ancillary.module';
import { MealsModule } from './meals/meals.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    PassengersModule,
    SeatsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
