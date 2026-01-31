package com.example.model;
 
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
 
@Entity
 
@Table(name="Flgt")
 
public class flight {
 
	@Id
 
	@GeneratedValue(strategy=GenerationType.AUTO)
 
	private Long id;
 
	@Column(name="flight_name")
 
	private String flightName;
 
	@Column(name="flight_source")
 
	private String source;
 
	@Column(name="flight_destination")
 
	private String destination;
 
	public flight() {}
 
	public flight(Long id, String flightName, String source, String destination)
 
	{
 
		this.id=id;
 
		this.flightName=flightName;
 
		this.source=source;
 
		this.destination=destination;
 
	}
 
	public Long getId() {
 
		return id;
 
	}
 
	public void setId(Long id) {
 
		this.id = id;
 
	}
 
	public String getFlightName() {
 
		return flightName;
 
	}
 
	public void setFlightName(String flightName) {
 
		this.flightName = flightName;
 
	}
 
	public String getSource() {
 
		return source;
 
	}
 
	public void setSource(String source) {
 
		this.source = source;
 
	}
 
	public String getDestination() {
 
		return destination;
 
	}
 
	public void setDestination(String destination) {
 
		this.destination = destination;
 
	}
 
}
 
 
 
 