import { Component, OnInit } from '@angular/core';
import { FlightService, Flight } from '../flight.service';

@Component({
  selector: 'app-flights',
  standalone: false,
  templateUrl: './flights.html',
  styleUrl: './flights.css',
})
export class Flights implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flights = this.flightService.getFlights();
  }
}
