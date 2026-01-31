import { Injectable } from '@angular/core';

export interface Flight {
    id: number;
    flightNo: string;
    origin: string;
    destination: string;
}

@Injectable({
    providedIn: 'root'
})
export class FlightService {
    private flights: Flight[] = [
        { id: 101, flightNo: 'AI-202', origin: 'Delhi', destination: 'New York' },
        { id: 202, flightNo: 'BA-305', origin: 'London', destination: 'Tokyo' },
        { id: 303, flightNo: 'LH-404', origin: 'Berlin', destination: 'Paris' }
    ];

    constructor() { }

    getFlights(): Flight[] {
        return this.flights;
    }

    getFlightById(id: number): Flight | undefined {
        return this.flights.find(f => f.id === id);
    }

    addFlight(flight: Flight): void {
        this.flights.push(flight);
    }

    deleteFlight(id: number): void {
        this.flights = this.flights.filter(f => f.id !== id);
    }

    updateFlight(flight: Flight): void {
        const index = this.flights.findIndex(f => f.id === flight.id);
        if (index !== -1) {
            this.flights[index] = flight;
        }
    }
}
