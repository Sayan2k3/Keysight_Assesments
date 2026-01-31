// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-flight-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './flight-list.component.html',
//   styleUrls: ['./flight-list.component.css']
// })
// export class FlightListComponent {

//   flights = [
//     {
//       number: 'SK101',
//       source: 'Delhi',
//       destination: 'Mumbai',
//       time: '10:30 AM',
//       status: 'On Time'
//     },
//     {
//       number: 'SK202',
//       source: 'Bangalore',
//       destination: 'Chennai',
//       time: '12:45 PM',
//       status: 'Delayed'
//     },
//     {
//       number: 'SK303',
//       source: 'Kolkata',
//       destination: 'Pune',
//       time: '03:15 PM',
//       status: 'Cancelled'
//     }
//   ];
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {

  flights: any[] = [];

  
  constructor(private flightService: FlightService) {
    this.flights = this.flightService.getAllFlights();
  }
}
