import React, { useState, useEffect } from "react";

function Instrument() {
  const oldInstrument = "Drums";
  const [newInstrument, setNewInstrument] = useState("");

  useEffect(() => {
    console.log("New instrument value changed:", newInstrument);
  }, [newInstrument]);

  const showInstrument = () => {
    setNewInstrument("Violin");
  };

  return (
    <div style={{ border: "2px solid black", padding: "40px", width: "400px" }}>
      <h3>Old instrument: {oldInstrument}</h3>
      <h3>New Instrument: {newInstrument}</h3>
      <button onClick={showInstrument}>Show</button>
    </div>
  );
}

export default Instrument;
