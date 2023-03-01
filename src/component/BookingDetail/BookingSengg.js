import React from "react";
import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { BookingNav } from "./BookingNav";
import { BookingsengDes } from "./BookingsengDes";
import { ServiceDetail } from "./BookingwService";
export function BookingserviceEngg() {
  return (
    <>
      <Navbar />
      <BookingNav />
      <ServiceDetail />
      <BookingsengDes />
      <FooterNext prev="/bookingdetail2" next="/trackBooking" />
      <Footer />
    </>
  );
}
