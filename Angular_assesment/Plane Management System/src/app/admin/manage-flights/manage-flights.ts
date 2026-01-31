import { Component, OnInit } from '@angular/core';
import { FlightService, Flight } from '../../flight.service';

@Component({
  selector: 'app-manage-flights',
  standalone: false,
  templateUrl: './manage-flights.html',
  styleUrl: './manage-flights.css',
})
export class ManageFlights implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.refreshFlights();
  }

  refreshFlights() {
    this.flights = this.flightService.getFlights();
  }

  deleteFlight(id: number) {
    if (confirm('Are you sure you want to delete this flight?')) {
      this.flightService.deleteFlight(id);
      this.refreshFlights();
    }
  }
}
