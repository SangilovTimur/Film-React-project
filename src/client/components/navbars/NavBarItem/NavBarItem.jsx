import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarItem({ title, to }) {
  return (
    <li>
      <NavLink className="header-link" to={to}>
        {title}
      </NavLink>
    </li>
  );
}
