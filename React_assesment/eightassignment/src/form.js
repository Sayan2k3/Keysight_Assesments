import React, { useState, useRef } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);
  const [data, setData] = useState(null);

  const nErr = name === "";
  const eErr = email === "";
  const aErr = age === "";
  const cErr = course === "";
  const gErr = gender === "";
  const tErr = !terms;

  const disable = nErr || eErr || aErr || cErr || gErr || tErr;

  const submitControlled = (e) => {
    e.preventDefault();
    setData({ name, email, age, course, gender });
    setName("");
    setEmail("");
    setAge("");
    setCourse("");
    setGender("");
    setTerms(false);
  };

  const sName = useRef();
  const cName = useRef();
  const msg = useRef();
  const rate = useRef();

  const submitUncontrolled = (e) => {
    e.preventDefault();
    alert(
      sName.current.value +
        " | " +
        cName.current.value +
        " | " +
        msg.current.value +
        " | " +
        rate.current.value
    );
    sName.current.value = "";
    cName.current.value = "";
    msg.current.value = "";
    rate.current.value = "";
  };

  return (
    <div style={{ width: "600px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Controlled Form – Student Admission</h2>

      <form onSubmit={submitControlled} style={{ border: "1px solid #ccc", padding: "15px" }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Student Name" />
        {nErr && <div>Required</div>}

        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        {eErr && <div>Required</div>}

        <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        {aErr && <div>Required</div>}

        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select Course</option>
          <option>React</option>
          <option>Angular</option>
          <option>Java</option>
          <option>Python</option>
        </select>
        {cErr && <div>Required</div>}

        <div>
          <input type="radio" checked={gender === "Male"} onChange={() => setGender("Male")} />Male
          <input type="radio" checked={gender === "Female"} onChange={() => setGender("Female")} />Female
        </div>
        {gErr && <div>Required</div>}

        <div>
          <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />Accept Terms
        </div>
        {tErr && <div>Required</div>}

        <button disabled={disable}>Submit</button>
      </form>

      {data && (
        <div style={{ marginTop: "15px", border: "1px solid green", padding: "10px" }}>
          <h4>Submitted Data</h4>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.age}</p>
          <p>{data.course}</p>
          <p>{data.gender}</p>
        </div>
      )}

      <h2 style={{ marginTop: "30px" }}>Uncontrolled Form – Course Feedback</h2>

      <form onSubmit={submitUncontrolled} style={{ border: "1px solid #ccc", padding: "15px" }}>
        <input ref={sName} placeholder="Student Name" />
        <input ref={cName} placeholder="Course Name" />
        <textarea ref={msg} placeholder="Feedback"></textarea>
        <input ref={rate} placeholder="Rating (1-5)" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Form;
