import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SellerSignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import RegisterHotel from './pages/RegisterHotel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SellerSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registerhotel" element={<RegisterHotel/>} />


      </Routes>
    </Router>
  );
}

export default App;
