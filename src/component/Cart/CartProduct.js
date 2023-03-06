import React from "react";

export default function CartProduct() {
  return (
    <div class="card cartProduct">
      <div class="card-body d-flex justify-content-between align-items-center cart-product-card">
        <div>
          <img
            src="banner2.png"
            alt="..."
            class="whyImage "
            style={{ width: "100%" }}
          />
        </div>
        <div className="mx-3">
          <h4 class="card-title my-2 servicesHeading ">
            Samsung Galaxy A04s screen
          </h4>

          <p class="card-text">
            If you are looking for a Laserjet / Inkjet Printer repair in Bhopal,
            Mandideep, Hoshangabad, Raisen, Sehor and more locations.
          </p>

          <p>Price : ₹8000</p>
        </div>
      </div>
    </div>
  );
}
