import React from 'react';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
