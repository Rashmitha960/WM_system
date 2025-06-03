import React, { useState } from 'react';
import '../styles/Header.css';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  /*----------Helper Functions--------- */
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className={`header ${darkMode ? 'dark' : ''}`}>
      <h1>Dashboard</h1>

      {/*-------Helper Functions---------- */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search inventory..." />
      </div>

      {/*------------ Icons and Buttons---------- */}
      <div className="header-icons">
        <button onClick={toggleCalendar} className="calendar-button">
          {showCalendar ? "Hide Calendar" : "Show Calendar"}
        </button>

        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <FaBell className="notification-icon" />
        <FaUserCircle className="user-icon" />
      </div>

      {/* -----Calendar popup ------*/}
      {showCalendar && (
        <div className="calendar-popup">
          <Calendar onChange={setDate} value={date} />
          <p className="selected-date">Selected: {date.toDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
