import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reports", path: "/reports" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/rset.jpg"
            alt="RSET"
          />

          <div className="navbar-brand">
            <span>Rajagiri School of</span>
            <strong>Engineering & Technology</strong>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Dummy RSMS link */}
          <a
            href="#"
            className="rsms-button"
            onClick={(e) => e.preventDefault()}
          >
            RSMS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
          >
            {item.name}
          </NavLink>
        ))}

        <a
          href="#"
          className="mobile-rsms"
          onClick={(e) => e.preventDefault()}
        >
          RSMS
        </a>
      </nav>
    </header>
  );
}

export default Navbar;