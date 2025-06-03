<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import SettingsPage from './pages/SettingsPage';
import './style.css';

function App() {
  return (
    <div className="app-container">
      <SettingsPage />
    </div>
=======
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
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard'; 
>>>>>>> feature/login

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navigate to="/orders" />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
>>>>>>> a5d075e4922a9c2d14ac650e038d1e8a7449d3be
>>>>>>> 9bf5ca4c5cc3478fc8505fc60de50ba990a55447
=======
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ⬅️ Added dashboard route */}
      </Routes>
    </Router>
>>>>>>> feature/login
  );
}

export default App;
<<<<<<< HEAD
=======


>>>>>>> feature/login
