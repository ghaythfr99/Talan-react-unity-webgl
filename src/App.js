import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import About from './components/About';
import Home from './components/Home';
import Jeu from './components/jeu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Jeu" element={<Jeu />} />
        </Routes>

        </Router>

    </div>
  );
}

export default App;
