import React from "react";
import NavBarItem from "../NavBarItem";
import navElems from "../navElems";

export default function NavBarList() {
  const navbarElems = navElems.map((item) => (
    <NavBarItem key={item.title} {...item} />
  ));
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {navbarElems}
          <li className="navbar">
            <a href="#" className="brand-logo right">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
