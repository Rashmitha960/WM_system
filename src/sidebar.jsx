// components/Sidebar.jsx
import React from "react";
import "./Sidebar.css";

export const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = ["inventory", "orders", "shipping", "settings"];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-list">
        {tabs.map(tab => (
          <li
            key={tab}
            className={`sidebar-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};
