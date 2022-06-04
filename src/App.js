import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
