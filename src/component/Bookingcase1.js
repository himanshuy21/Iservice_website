import React from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import FooterNext from "./FooterNext";
import Booking1body from "./BookingCase1/Booking1body";
function BookingCase1() {
  return (
    <>
      <Navbar />
      <Booking1body />
      <FooterNext prev="/" next="/problem" />
      <Footer />
    </>
  );
}

export default BookingCase1;
