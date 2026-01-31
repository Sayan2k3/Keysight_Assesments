import React from "react";

function RouteInfo(props) {
  return (
    <div>
      <h3>Route Information</h3>
      <p>Source: {props.source}</p>
      <p>Destination: {props.destination}</p>
    </div>
  );
}

function PriceInfo(props) {
  return (
    <div>
      <h3>Price Information</h3>
      <p>Ticket Price: ₹{props.price}</p>
    </div>
  );
}

function FlightInfo(props) {
  return (
    <div>
      <h2>Flight Information</h2>
      <p>Airline Name: {props.airlineName}</p>
      <p>Airline Code: {props.airlineCode}</p>
      <p>Seats: {props.seats}</p>

      <RouteInfo
        source={props.source}
        destination={props.destination}
      />

      <PriceInfo price={props.ticketPrice} />
    </div>
  );
}

function App() {
  const flightDetails = {
    airlineName: "Air Asia",
    airlineCode: "9e-144",
    seats: 250,
    source: "CCU",
    destination: "IXB",
    ticketPrice: 3500
  };

  return (
    <div>
      <h1>Single Flight Details</h1>
      <FlightInfo
        airlineName={flightDetails.airlineName}
        airlineCode={flightDetails.airlineCode}
        seats={flightDetails.seats}
        source={flightDetails.source}
        destination={flightDetails.destination}
        ticketPrice={flightDetails.ticketPrice}
      />
    </div>
  );
}

export default App;
