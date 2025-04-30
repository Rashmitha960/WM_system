import React, { useState } from "react";
import "../styles/Dashboard.css";
import { FaBoxOpen, FaClock, FaTruck, FaExclamationTriangle } from "react-icons/fa";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("Week");

  // Different data for each filter
  const dashboardData = {
    Week: {
      products: 500,
      orders: 10,
      shipments: 25,
      lowStock: 2,
    },
    Month: {
      products: 2483,
      orders: 43,
      shipments: 128,
      lowStock: 14,
    },
    Quarter: {
      products: 7000,
      orders: 150,
      shipments: 400,
      lowStock: 30,
    },
    Year: {
      products: 29000,
      orders: 640,
      shipments: 1600,
      lowStock: 100,
    },
  };

  const currentData = dashboardData[activeFilter];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Warehouse Dashboard</h2>
        <p>Overview of warehouse operations and inventory</p>
      </div>

      <div className="cards-container">
        <div className="card blue">
          <div className="card-header">
            <span>Total Products</span>
            <FaBoxOpen />
          </div>
          <h3>{currentData.products}</h3>
          <p className="positive">↑ 12% from last period</p>
        </div>

        <div className="card yellow">
          <div className="card-header">
            <span>Pending Orders</span>
            <FaClock />
          </div>
          <h3>{currentData.orders}</h3>
          <p className="positive">↑ 4% from last period</p>
        </div>

        <div className="card green">
          <div className="card-header">
            <span>Outbound Shipments</span>
            <FaTruck />
          </div>
          <h3>{currentData.shipments}</h3>
          <p className="positive">↑ 8% from last period</p>
        </div>

        <div className="card red">
          <div className="card-header">
            <span>Low Stock Items</span>
            <FaExclamationTriangle />
          </div>
          <h3>{currentData.lowStock}</h3>
          <p className="negative">↓ 2 from last period</p>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {["Week", "Month", "Quarter", "Year"].map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
