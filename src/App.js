import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Orders from './Pages/Orders/OrdersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/orders" />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
