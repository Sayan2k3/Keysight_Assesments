import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Flights } from './flights/flights';
import { FlightDetails } from './flight-details/flight-details';
import { Admin } from './admin/admin';
import { AddFlight } from './admin/add-flight/add-flight';
import { ManageFlights } from './admin/manage-flights/manage-flights';
import { NotFound } from './not-found/not-found';
import { EditFlight } from './admin/edit-flight/edit-flight';

@NgModule({
  declarations: [
    App,
    Home,
    Flights,
    FlightDetails,
    Admin,
    AddFlight,
    ManageFlights,
    NotFound,
    EditFlight
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
