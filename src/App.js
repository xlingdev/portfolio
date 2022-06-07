import React from 'react';
import PreLoader1 from './components/PreLoader1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="/experience" element={<Experience />}/>
                    <Route path="/contact" element={<Contact />}/>
                    </Routes>
      </div>
    </Router>
  );
}

export default App;
