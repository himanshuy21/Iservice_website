import React from "react";
import "./Bookingnav.css";
export function BookingNav() {
  return (
    <>
      <div className="BookingDetail">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">HomePage</li>
            <li className="breadcrumb-item active" aria-current="page">
              Booking Detail
            </li>
          </ol>
        </nav>
        <div className="detail">
          <h3 className="bookingtitle">Booking Details</h3>
          <p className="bookingdes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            vitae aut molestiae sit temporibus aperiam?
          </p>
        </div>
      </div>
    </>
  );
}
