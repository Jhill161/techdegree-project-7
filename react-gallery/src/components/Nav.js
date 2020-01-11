import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/aurora">Aurora</NavLink>
          </li>
          <li>
            <NavLink to="/alaska">Alaska</NavLink>
          </li>
          <li>
            <NavLink to="/snow">Snow</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
