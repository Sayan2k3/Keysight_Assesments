import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService, Flight } from '../../flight.service';

@Component({
  selector: 'app-edit-flight',
  standalone: false,
  templateUrl: './edit-flight.html',
  styleUrl: './edit-flight.css',
})
export class EditFlight implements OnInit {
  flight: Flight | undefined;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const existingFlight = this.flightService.getFlightById(id);
    if (existingFlight) {
      // Clone the object to avoid direct mutation before save
      this.flight = { ...existingFlight };
    } else {
      alert('Flight not found');
      this.router.navigate(['/admin/manage-flights']);
    }
  }

  update() {
    if (this.flight) {
      this.flightService.updateFlight(this.flight);
      alert('Flight Updated Successfully!');
      this.router.navigate(['/admin/manage-flights']);
    }
  }
}
