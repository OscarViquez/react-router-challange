import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'

import HomePage from './routes/home.page';
import ContactPage from './routes/contact.page';
import About from './routes/about.page';

function App() {
  return (
    <>
        <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    </>
  );
}

export default App;
