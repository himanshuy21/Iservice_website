import React from "react";
import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { Bookingdes1 } from "./BookingDes1";
import { BookingNav } from "./BookingNav";
export function BookingDetail() {
  return (
    <>
      <Navbar />
      <BookingNav />
      <Bookingdes1 />
      <FooterNext prev="/location" next="/bookingdetail2" />
      <Footer />
    </>
  );
}
