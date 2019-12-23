import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = props => {
  return (
    <React.Fragment>
      <ul className="navbar-nav">
        <li className="nav-item" onClick={props.collapseMenu}>
          <NavLink className="nav-link" to="/games">
            GAMES
          </NavLink>
        </li>
        <li className="nav-item" onClick={props.collapseMenu}>
          <NavLink className="nav-link" to="/accounts">
            ACCOUNTS
          </NavLink>
        </li>
        <li className="nav-item" onClick={props.collapseMenu}>
          <NavLink className="nav-link" to="/contact-us">
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavLinks;
