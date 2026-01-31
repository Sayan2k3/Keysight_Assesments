import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

 
  private flights = [
    {
      number: 'SK101',
      source: 'Delhi',
      destination: 'Mumbai',
      time: '10:30 AM',
      status: 'On Time'
    },
    {
      number: 'SK202',
      source: 'Bangalore',
      destination: 'Chennai',
      time: '12:45 PM',
      status: 'Delayed'
    },
    {
      number: 'SK303',
      source: 'Kolkata',
      destination: 'Pune',
      time: '03:15 PM',
      status: 'Cancelled'
    }
  ];

  
  getAllFlights() {
    return this.flights;
  }
}
