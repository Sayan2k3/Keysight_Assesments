import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  standalone: false,
  templateUrl: './flight-details.html',
  styleUrl: './flight-details.css',
})
export class FlightDetails implements OnInit {
  flightId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.flightId = this.route.snapshot.paramMap.get('id');
  }
}
