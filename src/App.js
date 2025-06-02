<<<<<<< HEAD
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ChartsDashboard from "./components/ChartsDashboard";
import WarehouseFloorMap from "./components/WarehouseFloorMap";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
    <div style={{ flex: 1 }}>
        <Header />
        <Dashboard />
        <ChartsDashboard/>
        <WarehouseFloorMap/>
    </div>
    </div>
=======
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
>>>>>>> a5d075e4922a9c2d14ac650e038d1e8a7449d3be
  );
}

export default App;
