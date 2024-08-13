import React from 'react';
import './App.css';
import Nav from './Componet/Nav';

import Home from './Componet/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Services from './Componet/Services';
import Pricing from './Componet/Pricing';
import Contact from './Componet/Contact';




function App() {
  return (
    <div className="App">
      <Nav />
       <Routes>
         <Route path="/" element={<Home />} />
        // <Route path="/services" element={<Services />} />
        // <Route path="/pricing" element={<Pricing />} />
        // <Route path="/contact" element={<Contact />} />
      </Routes> 
    </div>
  );

  

}


export default App;
