// src/components/SystemMonitoring.js
import React from "react";

const SystemMonitoring = () => {
  return (
    <div style={{ background: "#fff", padding: "1rem", borderRadius: "10px", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)" }}>
      <h3>System Monitoring</h3>
      <ul>
        <li>🖥️ Server Status: <span style={{ color: "green" }}>Online</span></li>
        <li>📦 Storage Usage: 75%</li>
        <li>⚡ CPU Load: 45%</li>
      </ul>
    </div>
  );
};

export default SystemMonitoring;
