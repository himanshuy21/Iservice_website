import React from "react";
import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import SimilarProducts from "./SimilarProduct";

export default function OrderBanner() {
  return (
    <div>
      <Navbar />
      <div className="BookingDetail">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">HomePage</li>
            <li className="breadcrumb-item active" aria-current="page">
              OrderConfirmation
            </li>
          </ol>
        </nav>
        <div className="detail">
          <h3 className="bookingtitle">Thank You For Your Order</h3>
          <p className="bookingdes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            vitae aut molestiae sit temporibus aperiam?
          </p>
        </div>
      </div>
      <SimilarProducts />
      <div className="d-flex">
        <div className="container  mt-2 mb-2 d-flex justify-content-center align-items-center">
          <div className="btn-container">
            <button type="button" className="btn btn-dark">
              View All
            </button>
          </div>
        </div>
      </div>
      <FooterNext prev="/cartmain" />
      <Footer />
    </div>
  );
}
