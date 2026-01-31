import { Component } from '@angular/core';
import { FlightService } from '../../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  standalone: false,
  templateUrl: './add-flight.html',
  styleUrl: './add-flight.css',
})
export class AddFlight {
  flightNo = '';
  origin = '';
  destination = '';

  constructor(private flightService: FlightService, private router: Router) { }

  add() {
    if (this.flightNo && this.origin && this.destination) {
      this.flightService.addFlight({
        id: new Date().getTime(), // Simple ID generation
        flightNo: this.flightNo,
        origin: this.origin,
        destination: this.destination
      });
      alert('Flight Added Successfully!');
      this.router.navigate(['/admin/manage-flights']);
    } else {
      alert('Please fill all fields');
    }
  }
}
