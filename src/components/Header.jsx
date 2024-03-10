import React from "react";
import heroimg from "../images/hero.jpg";
import { Link} from "react-router-dom";
import Footer from "./Footer";

const Header = () => {

  return (
    <div className="header">
      <div className="content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          recipes served with a modern twist. We are a family owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist.
        </p>
        <Link to="/reservation">
        <button className="button">
          Reserve Table
        </button>
        </Link>
      </div>
      <div className="image">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Header;
