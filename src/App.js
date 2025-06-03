import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ⬅️ Added dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;


