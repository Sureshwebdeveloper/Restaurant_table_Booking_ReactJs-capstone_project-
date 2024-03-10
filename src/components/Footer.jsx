import React from "react";
import footerimg from "../images/fevi.png";
import "../stylesheets/footer.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <div className="about">
        <div className="about-1">
          <img src={footerimg} alt="footerLogo" />
          <h2>Little Lemon</h2>
        </div>
        <p>
          The Key Concet Of <span>Little Lemon</span> is focused traditional
          recipes served with a modern twist.
        </p>
      </div>
      <div className="sections">
        <div className="location">
          <h2>Locations & Other branchlet's</h2>
          <p>New York</p>
          <p>Florida</p>
          <p>California</p>
          <p>Nevada</p>
        </div>
        <div className="timing">
          <h2>Opening Times</h2>
          <p>Mon - Wed: 10:30AM - 12:00AM</p>
          <p>Fri: 12:00PM - 1:00AM</p>
          <p>Sat - Sun: 10:30AM - 12:00AM</p>
        </div>

        <div className="self">
          <div className="contact-us">
            <h2>Contact Us</h2>
            <p>Chicako , 5th Street - Little Lemon -Tel: 123-456-7890 </p>
            <p>Email: Littlelemonorg.Com</p>
          </div>
        </div>
      </div>
      <p className="copyright">
        ©{year} Little Lemon Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
