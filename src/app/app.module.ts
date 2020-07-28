import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlightsModule } from './flights/flights.module';
import { PassengersModule } from './passengers/passengers.module';
import { SeatsModule } from './seats/seats.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FlightsModule,
    PassengersModule,
    SeatsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
