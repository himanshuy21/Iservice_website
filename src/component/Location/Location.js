import React from "react";
import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { ProblemPageBody } from "../ProblemDevice/ProblemPagebody";
import { LocationDetail } from "./LocationDetail";
export function Location() {
  return (
    <>
      <Navbar />
      <div className="center">
        <h2>What is the location ?</h2>
        <p>
          Tell us about your device Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec dictum augue ex, a feugiat libero porttitor
          vel. Ut
        </p>
        <ProblemPageBody />
        <LocationDetail />
      </div>
      <FooterNext prev="/need" next="/BookingDetail1" />
      <Footer />
    </>
  );
}
