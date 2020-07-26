import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CheckInModule } from './check-in/check-in.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    NgbModule,
    CheckInModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
