import React, { useState } from "react";
import "../styles/WarehouseFloorMap.css";

const sections = [
  { label: "A-1" }, { label: "R-1" }, { label: "R-2" }, { label: "A-5" }, { label: "A-6" }, { label: "A-7" }, { label: "OFF" },
  { label: "B-1" }, { label: "B-2", status: "low" }, { label: "B-3" }, { label: "B-4" }, { label: "B-5" }, { label: "B-6" }, { label: "B-7" }, { label: "B-8" },
  { label: "C-1" }, { label: "C-2" }, { label: "C-3" }, { label: "C-4" }, { label: "PKG", status: "packaging" }, { label: "C-6" }, { label: "C-7" }, { label: "C-8" },
  { label: "D-1" }, { label: "LS", status: "low" }, { label: "D-3" }, { label: "D-4" }, { label: "D-5" }, { label: "D-6" }, { label: "D-7" }, { label: "D-8" },
  { label: "E-1" }, { label: "E-2" }, { label: "E-3" }, { label: "E-4" }, { label: "E-5" }, { label: "E-6", status: "shipping" }, { label: "E-7" }, { label: "E-8" },
  { label: "BRK" }, { label: "F-1" }, { label: "F-2" }, { label: "F-3" }, { label: "F-4" }, { label: "F-5" }, { label: "F-6" },
];

const WarehouseFloorMap = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (section) => {
    setSelected(section);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div className="warehouse-container">
      <h2>Warehouse Floor Map</h2>
      <div className="legend">
        <span className="storage">● Storage</span>
        <span className="packaging">● Packaging</span>
        <span className="shipping">● Shipping</span>
        <span className="receiving">● Receiving</span>
        <span className="low">● Low Stock</span>
      </div>
      <div className="grid">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`block ${item.status || ""}`}
            onClick={() => handleClick(item)}
          >
            {item.label}
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Section: {selected.label}</h3>
            <p>Status: {selected.status ? selected.status : "Storage"}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WarehouseFloorMap;
