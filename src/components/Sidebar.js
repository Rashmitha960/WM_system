import React, { useState } from "react";
import "../styles/Sidebar.css";
import {
  FaTachometerAlt,
  FaBoxes,
  FaClipboardList,
  FaCog,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo" onClick={toggleSidebar}>
        <FaBars className="menu-icon" />
        {isOpen && <span>WH management</span>}
      </div>

      {isOpen && (
        <>
          <ul className="nav-links">
            <li><FaTachometerAlt /> Dashboard</li>
            <li><FaBoxes /> Inventory</li>
            <li><FaClipboardList /> Orders</li>
            <li><FaCog /> Settings</li>
          </ul>

          <div className="user-section">
          <img src="/profilepic.jpg" className="profile-pic"/>
            <div>
              <strong>Rashmitha achar</strong>
              <p>Warehouse Manager</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
