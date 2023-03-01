import React from "react";
import "../BookingCase1/mainContainer.css";
import { Booking1Form } from "./Booking1Form";
export default function Booking1body() {
  return (
    <>
      <div className="center">
        <h2>Tell us about your device</h2>
        <p>
          Tell us about your device Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec dictum augue ex, a feugiat libero porttitor
          vel. Ut
        </p>
        <div className="image"></div>
        <Booking1Form />
      </div>
    </>
  );
}
