import React from "react";
import "../stylesheets/home.css";
import item_1 from "../images/Bruchetta.jpg";
import item_2 from "../images/Greek_salad.jpg";
import item_3 from "../images/creme.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Footer from "../components/Footer";

const Home = () => {
  const handlpopup = () => {
    swal({
      title: "Are you sure?",
      text: "Do, you want to be order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Successfully orderd!", {
          icon: "success",
        });
      } else {
        swal("could not orderd!");
      }
    });
  };
  return (
    <div>
      <div className="container">
      <Header />
        <div className="special_items">
          <div className="head_content">
            <div className="sub_head_content">
              <h1>This Week Specials</h1>
            <Link to="/menu">
              <button className="button">Online Menu</button>
            </Link>
            </div>
          </div>

          <div className="items">
            <div className="item_1">
              <img src={item_1} alt="Bruchetta" />
              <div className="price">
                <h3>Bruchetta</h3>
                <h4>$9.99</h4>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil, made perfect
                for an evening dinner.
              </p>
              <button className="order" onClick={handlpopup}>
                Order
              </button>
            </div>
            <div className="item_2">
              <img src={item_2} alt="Greek_salad.jpg" />
              <div className="price">
                <h3>Greek Salad</h3>
                <h4>$8.99</h4>
              </div>
              <p>
                The famous Greek salad of crispy lettuce, peppers, olives and
                our Chicago styled feta cheese, garnished with crunchy garlic,
                rosemary croutons.
              </p>
              <button className="order" onClick={handlpopup}>
                Order
              </button>
            </div>
            <div className="item_3">
              <img src={item_3} alt="cake" />
              <div className="price">
                <h3>Lemon Dessert</h3>
                <h4>$5.99</h4>
              </div>
              <p>
                This comes straight from Grandma's recipe book. Every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <button className="order" onClick={handlpopup}>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
