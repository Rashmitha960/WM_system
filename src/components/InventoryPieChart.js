import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Food", value: 300 },
  { name: "Furniture", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const InventoryPieChart = () => {
  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "1rem", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h3 style={{ textAlign: "center" }}>Category-wise Inventory</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryPieChart;
