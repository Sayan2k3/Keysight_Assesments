package com.flightapp.repository;

import com.flightapp.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {
    List<Flight> findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCaseAndAirlineNameContainingIgnoreCaseAndEconomyPriceBetween(
            String origin, String destination, String airlineName, Double minPrice, Double maxPrice,
            org.springframework.data.domain.Sort sort);
}
