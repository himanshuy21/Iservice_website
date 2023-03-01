import React from "react";

export default function PurchaseCard() {
  return (
    <div className="card purchaseCard">
      <div className="card-body">
        <img
          className="card purchaseImage"
          style={{ width: "100%" }}
          src="banner.png"
          alt="Card image cap"
        ></img>
        <div className="purchaseCardBody">
          <h4 className="card-title my-2 servicesCardHeading">iPhone 6</h4>

          <p className="card-text servicesCard-sub-Heading">Price: ₹6000</p>
        </div>
      </div>
    </div>
  );
}
