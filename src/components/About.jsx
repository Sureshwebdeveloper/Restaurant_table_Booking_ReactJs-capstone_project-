import React from "react";
import Footer from "./Footer";
import lemon from "../images/lemon.png";
import chef from "../images/chef.png";
import delivery from "../images/delivery.png";
import "../stylesheets/about.css";

const About = () => {
  return (
    <div>
      <section className="about_page">
        <div className="section-1">
          <div className="image_container">
            <img src={lemon} alt="lemon_icon" />
          <p>
            Little Lemon is a family-owned gem nestled in the heart of Chicago,
            Illinois. Our culinary journey is a delightful blend of tradition
            and innovation, where we pay homage to the rich flavors of the
            Mediterranean while infusing our dishes with a modern twist.
          </p>
          </div>
        </div>
        <div className="section-2">
          <div className="image_container">
            <img src={delivery} alt="scooter-icon" />
          <p>
            Certainly! At Little Lemon, we take pride in our efficient food
            delivery service. Whether you're craving a hearty Mediterranean
            feast or a light salad, we've got you covered. Our commitment to
            quality extends beyond our restaurant doors, ensuring that every
            dish arrives at your doorstep.
          </p>
          </div>
        </div>
        <div className="section-3">
          <div className="image_container">
            <img src={chef} alt="chef_icon" />
          <p>
            Why “Little Lemon”? Because lemons symbolize freshness, vibrancy,
            and a hint of adventure. Chef Lemon's obsession with these golden
            orbs infuses every dish with magic. Of Our Chefs.
          </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
