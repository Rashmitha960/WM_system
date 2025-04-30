import React from "react";
import InventoryBarChart from "./InventoryBarChart";
import InventoryPieChart from "./InventoryPieChart";

const ChartsDashboard = () => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "1.5rem",
      padding: "2rem"
    }}>

      <InventoryPieChart />
      <InventoryBarChart/>
  
     
    </div>
  );
};

export default ChartsDashboard;