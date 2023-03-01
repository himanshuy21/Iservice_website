import React from "react";
import Footer from "../Footer";
import FooterNext from "../FooterNext";
import Navbar from "../Nav";
import { ProblemPageBody } from "./ProblemPagebody";
import { ProblemPageDes } from "./ProblemPageDes";
export default function ProblemPage() {
  return (
    <>
      <Navbar />
      <div className="center">
        <h2>What is the problem of the device ?</h2>
        <p>
          Tell us about your device Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec dictum augue ex, a feugiat libero porttitor
          vel. Ut
        </p>
        <ProblemPageBody />
        <ProblemPageDes />
      </div>
      <FooterNext prev="/case1" next="/need" />
      <Footer />
    </>
  );
}
