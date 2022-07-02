import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import './App.css';
//hi
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
                    <Route path='/resume' element={<Resume />}/>
                    </Routes>
      </div>
    </Router>
  );
}

export default App;
