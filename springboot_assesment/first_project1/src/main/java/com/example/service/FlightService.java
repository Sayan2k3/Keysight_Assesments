package com.example.service;


import java.util.List;

import org.springframework.stereotype.Service;


import com.example.model.flight;

import com.example.repository.flightRepository;

@Service

public class FlightService {

	private flightRepository flightrepos;

	public FlightService(flightRepository flightrepos) {

		this.flightrepos=flightrepos;

	}

	//Create

	public flight addFlight(flight flight) {

		return flightrepos.save(flight);

	}

	// Fetch All

	public List<flight> getAllFlights(){

		return flightrepos.findAll();

	}

	//Fetch a signle Flight

	public flight getFlightById(Long id) {

		return flightrepos.findById(id).orElse(null);

	}

	//update

	public flight updateFlight(Long id, flight flight) {

		flight existing = flightrepos.findById(id).orElse(null);

		if(existing != null) {

			existing.setFlightName(flight.getFlightName());

			existing.setSource(flight.getSource());

			existing.setDestination(flight.getDestination());

			return flightrepos.save(existing);

		}

		return null;

	}

	public String deleteFlight(Long id) {

		flightrepos.deleteById(id);

		return "Flight deleted successfully";

	}


}


 