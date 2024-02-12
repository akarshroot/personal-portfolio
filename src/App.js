import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './base/Navbar'
import ScrollToTop from './base/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Contact from './pages/Contact';

function App() {
  const [navRefContainer, setNavState] = useState()
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar navRefSetter={setNavState} />
        </div>
        <div>
          <Routes>
            <Route path="/" exact element={<Home navRef={navRefContainer} />} />
            <Route path="/skills" exact element={<Skills navRef={navRefContainer} />} />
            <Route path="/work" exact element={<Projects navRef={navRefContainer} />} />
            <Route path="/background" exact element={<Background navRef={navRefContainer} />} />
            <Route path="/contact" exact element={<Contact navRef={navRefContainer} />} />
          </Routes>
        </div>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
