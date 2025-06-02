import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const barData = [
  { name: "Laptop", stock: 120 },
  { name: "Mobile", stock: 200 },
  { name: "Headphones", stock: 80 },
  { name: "Tablet", stock: 60 },
];

const InventoryBarChart = () => {
  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "1rem", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h3 style={{ textAlign: "center" }}>Stock per Item</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData} margin={{ top: 50, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="stock" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryBarChart;
