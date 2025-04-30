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
  );
}

export default App;
