package com.flightapp.service;

import com.flightapp.model.Flight;
import com.flightapp.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public List<Flight> searchFlights(String origin, String destination, String airline, Double minPrice,
            Double maxPrice,
            String sortBy, String sortDir) {
        org.springframework.data.domain.Sort sort = org.springframework.data.domain.Sort.by(
                sortDir.equalsIgnoreCase("desc") ? org.springframework.data.domain.Sort.Direction.DESC
                        : org.springframework.data.domain.Sort.Direction.ASC,
                sortBy);

        return flightRepository
                .findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCaseAndAirlineNameContainingIgnoreCaseAndEconomyPriceBetween(
                        origin, destination, airline, minPrice, maxPrice, sort);
    }

    public Optional<Flight> getFlightById(Long id) {
        return flightRepository.findById(id);
    }

    public Flight saveFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    public Flight updateFlight(Long id, Flight flightDetails) {
        return flightRepository.findById(id).map(flight -> {
            flight.setFlightNumber(flightDetails.getFlightNumber());
            flight.setOrigin(flightDetails.getOrigin());
            flight.setDestination(flightDetails.getDestination());
            flight.setDepartureTime(flightDetails.getDepartureTime());
            flight.setStatus(flightDetails.getStatus());
            return flightRepository.save(flight);
        }).orElse(null);
    }

    public void deleteFlight(Long id) {
        flightRepository.deleteById(id);
    }
}
