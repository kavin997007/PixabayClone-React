import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setSearch, darkMode, setDarkMode }) => {
  const [inputValue, setInputValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.clear();
    alert("You are logged out");
    navigate('/login');
  }

  const handleSearch = () => {
    setSearch(inputValue);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Pixabay Clone</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search images..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="menu-container">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="dropdown-menu">
            <button
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>

            <button
              className="logout-btn"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;