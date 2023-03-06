import React from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import FooterNext from "./FooterNext";
import HorizontalLinearStepper from "./BookingCase1/MultiStepForm/MultiStepForm";
import { ToastContainer } from "react-toastify";
function BookingCase1() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <HorizontalLinearStepper />
      <FooterNext prev="/" next="/BookingDetail1" />
      <Footer />
    </>
  );
}

export default BookingCase1;
