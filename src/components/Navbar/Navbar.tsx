import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand text-white">My blog</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="add" className="nav-link text-white">Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about" className="nav-link text-white">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contacts" className="nav-link text-white">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;