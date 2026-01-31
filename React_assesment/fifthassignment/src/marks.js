import React, { useState, useEffect } from "react";

function Marks() {
  const [name] = useState("Sayan");
  const [age] = useState(22);
  const [maths, setMaths] = useState(30);
  const [chemistry, setChemistry] = useState(20);
  const [physics, setPhysics] = useState(10);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTotal(maths + chemistry + physics);
  }, [maths, chemistry, physics]);

  const updateMarks = () => {
    setMaths(maths + 10);
    setChemistry(chemistry + 10);
    setPhysics(physics + 10);
    setCount(count + 1);
  };

  return (
    <div style={{ border: "2px solid black", width: "400px", padding: "20px" }}>
      <h2>Marksheet</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Total: {total}</p>
      <p>Maths: {maths}</p>
      <p>Chemistry: {chemistry}</p>
      <p>Physics: {physics}</p>
      <button onClick={updateMarks}>Update</button>
    </div>
  );
}

export default Marks;
