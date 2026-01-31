import React from "react";
import ReactDOM from "react-dom/client";

const students = [
  { studid: 101, studname: "ABC", age: 20, city: "Delhi" },
  { studid: 1022, studname: "DEF", age: 21, city: "Mumbai" },
  { studid: 103, studname: "GHI", age: 22, city: "Chennai" },
  { studid: 104, studname: "JKL", age: 23, city: "Kolkata" }
];

function App() {
  return (
    <div>
      {students.map((s) => (
        <div key={s.studid}>
          <h2>{s.studname}</h2>
          <h3>{s.age}</h3>
          <p>{s.city}</p>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
