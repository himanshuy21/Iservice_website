import React from "react";
import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import CartProduct from "./CartProduct";

export default function CartMain() {
  return (
    <div>
      <Navbar />
      <div className="BookingDetail">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">HomePage</li>
            <li className="breadcrumb-item active" aria-current="page">
              Purchase Cart
            </li>
          </ol>
        </nav>
        <div className="detail">
          <h1 className="  bookingtitle">Purchase Cart</h1>
          <p className=" subHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dictum augue ex, a feugiat libero porttitor vel.
          </p>
        </div>
      </div>
      <section>
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              {/* <div class="card-header py-3">
            <h5 class="mb-0">Cart - 2 items</h5>
          </div> */}

              <div class="row">
                <CartProduct />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 cart-summary">
                <div class="py-3">
                  <h5 class="mb-0 mx-3 servicesHeading"> Cart Summary</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <p className="cart-price-detail">Price Details</p>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 cart-price-text">
                      Subtotal ( 2 items ) :<span>₹8000</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Discount
                      <span> 50% Off</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div className="cart-price-text">Total:</div>
                      <span className="cart-price-text">₹4,000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterNext prev="/partpurchase" next="/thanku" />
      <Footer />
    </div>
  );
}
