import Footer from "./Footer";
import "../stylesheets/order.css";
import data from "../data/db.json";
import swal from "sweetalert";
import { useState } from "react";
import Pagination from "./Pagination";

const OrderOnline = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postperPage;
  const firstPostIndex = lastPostIndex - postperPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);
  const handlePopup = () => {
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
      <div className="product-section">
        {currentPost.map((product) => (
          <div className="product_container" key={product.id}>
            <div className="product">
              <img
                src={product.url}
                alt={product.alt}
                className="product_images"
              />
              <br />
              <div className="price-container">
                <h2 className="product_name">{product.name}</h2>
                <h3 className="product_price">Price : {product.price}</h3>
              </div>
              <button className="order" onClick={handlePopup}>
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination totalPosts={data.length} postperPage={postperPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
};

export default OrderOnline;
