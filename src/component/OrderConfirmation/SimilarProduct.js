import React from "react";
import PurchaseCard from "./PurchaseCart";

export default function SimilarProducts() {
  return (
    <div>
      <div class="container my-5 align-items-center ">
        <h1 className="bookingtitle my-5 ">Similar Products</h1>
        <div class="row">
          <div class="col">
            <PurchaseCard />
          </div>
          <div class="col">
            <PurchaseCard />
          </div>
          <div class="col">
            <PurchaseCard />
          </div>
          <div class="col">
            <PurchaseCard />
          </div>
        </div>
      </div>
    </div>
  );
}
