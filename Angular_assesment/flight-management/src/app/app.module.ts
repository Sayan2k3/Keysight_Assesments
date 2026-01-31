import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightHeaderComponent } from './flight-header/flight-header.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightFooterComponent } from './flight-footer/flight-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    FlightHeaderComponent,
    FlightListComponent,
    FlightFooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
