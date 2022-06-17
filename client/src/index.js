import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Navbar />
  </BrowserRouter>
);
