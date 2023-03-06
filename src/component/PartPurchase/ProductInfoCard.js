import React from "react";
import "./Part.css";
import "../BookingDetail/Bookingnav.css";
import { toast, ToastContainer } from "react-toastify";
export default function ProductInfoCard() {
  const Addtocart = () => {
    toast.success("Add to Cart", { autoClose: 1000 });
  };
  return (
    <div className="card cartProduct">
      <div className="card-body d-flex align-items-center cart-product-card">
        <div>
          <img src="banner2.png" alt="..." className="product-info-image " />
        </div>
        <div className="mx-4">
          <h4 className="card-title my-2 servicesHeading ">
            <a>iPhone 13 pro charger</a>
          </h4>

          <p className="card-text">Brand: Apple</p>
          <div className="d-flex ">
            <p className="fw-bold fs-4"> ₹4,000</p>
            <span className="text-decoration-line-through mx-3 my-2">
              {" "}
              ₹6,000
            </span>
          </div>
          <button type="button" className="btn btn-dark" onClick={Addtocart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
