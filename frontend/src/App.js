import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home'
import Menu from './pages/menu'
import Contact from './pages/contact'
import RootLayout from './base_layouts/root_layout'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;