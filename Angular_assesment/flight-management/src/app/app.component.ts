import { Component } from '@angular/core';
import { FlightHeaderComponent } from './flight-header/flight-header.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightFooterComponent } from './flight-footer/flight-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FlightHeaderComponent,
    FlightListComponent,
    FlightFooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Flight Management System';
}
