import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
     <nav>
       <h2 className="logo">DIYORBEK</h2>
       <div className="nav-links">
        <NavLink to="">Home</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/login">Log in </NavLink>
       </div>
     </nav>
    </>
  );
};

export default Nav;
