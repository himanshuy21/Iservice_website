import React from "react";
import { Link } from "react-router-dom";
export function BookingsengDes() {
  return (
    <div className="d-flex" style={{ background: "#ededed" }}>
      <div className="container  mt-2 mb-2 d-flex justify-content-center align-items-center">
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-dark"
            style={{ width: "10rem" }}
          >
            <Link
              to="/trackBooking"
              style={{ color: "white", textDecoration: "none" }}
            >
              Track Engineer
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
