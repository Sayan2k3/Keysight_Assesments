import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlightList from './components/FlightList';
import FlightForm from './components/FlightForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<FlightList />} />
            <Route path="/add-flight" element={<FlightForm />} />
            <Route path="/edit-flight/:id" element={<FlightForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
