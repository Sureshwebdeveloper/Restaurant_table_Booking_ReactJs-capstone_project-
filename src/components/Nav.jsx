import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/logo_nav.jpg";
import "../stylesheets/nav.css";
import { FiMenu,FiX } from "react-icons/fi";

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <nav className={show ? "toggle" : "navbar"} >
        <div className="logo">
          <img src={icon} alt="" />
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reserve</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li id="login">
            <Link to="/">Login</Link>
          </li>
        </ul>
        <div className={"mobile-nav"}>
        <button className="menu" onClick={() => setShow(!show)}>
          {show ? 
            <FiX className="toggle_menu" /> : 
            <FiMenu className="toggle_menu" />
          }
        </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
