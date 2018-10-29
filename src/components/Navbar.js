import React from "react";

import { NavLink, withRouter } from "react-router-dom";

import "./Navbar.css";

export default withRouter(props => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a className="brand-logo">Poke'Times</a>
          <ul className="right">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
});
