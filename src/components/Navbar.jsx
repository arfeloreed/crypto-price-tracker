import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Cryptos
        </Link>

        <nav className="nav nav-underline">
          <div className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
